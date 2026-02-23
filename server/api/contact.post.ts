import type { H3Event } from 'h3'
import { defineEventHandler, readBody, getRequestHeader } from 'h3'
// Use dynamic import to avoid build-time resolution issues if dependencies are not yet installed
// and to keep this strictly server-only.

type ContactBody = {
  name?: string
  email?: string
  message?: string
}

// very light, in-memory rate limit (best-effort only)
const lastSentByIp = new Map<string, number>()
const WINDOW_MS = 60_000 // 1 minute

export default defineEventHandler(async (event: H3Event) => {
  if (event.method !== 'POST') {
    event.node.res.statusCode = 405
    return { ok: false, error: 'Method Not Allowed' }
  }

  const ip =
    (getRequestHeader(event, 'x-forwarded-for') || '').split(',')[0].trim() ||
    event.node.req.socket.remoteAddress ||
    'unknown'

  const now = Date.now()
  const last = lastSentByIp.get(ip) || 0
  if (now - last < WINDOW_MS) {
    event.node.res.statusCode = 429
    return { ok: false, error: 'Too many requests. Please wait a moment and try again.' }
  }

  const body = (await readBody(event)) as ContactBody
  const name = (body.name || '').trim()
  const fromEmail = (body.email || '').trim()
  const message = (body.message || '').trim()

  if (!name || !fromEmail || !message) {
    event.node.res.statusCode = 400
    return { ok: false, error: 'Please provide name, email, and message.' }
  }

  // simple email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(fromEmail)) {
    event.node.res.statusCode = 400
    return { ok: false, error: 'Please provide a valid email address.' }
  }

  const config = useRuntimeConfig()
  const host = config.smtpHost || process.env.NUXT_SMTP_HOST
  const port = Number(config.smtpPort || process.env.NUXT_SMTP_PORT || 587)
  const user = config.smtpUser || process.env.NUXT_SMTP_USER
  const pass = config.smtpPass || process.env.NUXT_SMTP_PASS
  const secure = String(config.smtpSecure || process.env.NUXT_SMTP_SECURE || 'false') === 'true'
  const to = 'bridgemindconsult@gmail.com'

  if (!host || !user || !pass) {
    // If SMTP is not configured, respond gracefully (no throw) to avoid breaking prod
    event.node.res.statusCode = 500
    return {
      ok: false,
      error:
        'Email service is not configured. Please set NUXT_SMTP_HOST, NUXT_SMTP_PORT, NUXT_SMTP_USER, and NUXT_SMTP_PASS.',
    }
  }

  try {
    // Dynamically import nodemailer at runtime
    const nm: any = await import('nodemailer').catch((e) => {
      throw new Error(
        'Email service is unavailable: nodemailer is not installed. Please run your package manager install command.'
      )
    })
    const createTransport = (nm?.default?.createTransport || nm?.createTransport)
    if (typeof createTransport !== 'function') {
      throw new Error('Email service is unavailable: failed to load nodemailer transport creator.')
    }

    const transporter = createTransport({ host, port, secure, auth: { user, pass } })

    const subject = `New contact from ${name}`
    const text = [`Name: ${name}`, `Email: ${fromEmail}`, '', message].join('\n')

    await transporter.sendMail({
      from: {
        name: 'BridgeMind Website',
        address: user as string,
      },
      replyTo: fromEmail,
      to,
      subject,
      text,
    })

    lastSentByIp.set(ip, now)
    return { ok: true }
  } catch (err) {
    console.error('Email send failed:', err)
    event.node.res.statusCode = 500
    return { ok: false, error: 'Failed to send message. Please try again later.' }
  }
})
