<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')
const loading = ref(false)
const success = ref<string | null>(null)
const error = ref<string | null>(null)

  import logoUrl from '../assets/logo.png'


useHead({
  title: 'BridgeMind Consult — Coming Soon',
  meta: [
    {
      name: 'description',
      content: 'BridgeMind Consult — Coming Soon. Contact us using the form.'
    }
  ]
})

async function submitForm() {
  error.value = null
  success.value = null
  loading.value = true
  try {
    const res = await $fetch('/api/contact', {
      method: 'POST',
      body: { name: name.value, email: email.value, message: message.value }
    })
    if ((res as any).ok) {
      success.value = 'Thanks! Your message has been sent.'
      name.value = ''
      email.value = ''
      message.value = ''
    } else {
      error.value = (res as any).error || 'Something went wrong.'
    }
  } catch (e: any) {
    error.value = e?.data?.error || e?.message || 'Failed to send message.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div>
    <section class="min-h-[80vh] border-b border-white/10">
      <div class="mx-auto max-w-3xl px-4 py-20 md:py-28 text-center">
         <img :src="logoUrl" alt="BridgeMind Consult logo" class="h-36 w-full object-contain p-1" />
        <h1 class="mt-4 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
          We’re building something new.
        </h1>
        <p class="mt-5 text-base leading-7 text-slate-300 md:text-lg">For inquires get in touch below.</p>

        <!-- <a
          href="https://calendly.com/app/scheduling/meeting_types/user/me"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-8 inline-flex items-center justify-center rounded-md bg-violet-500/15 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-violet-100 ring-1 ring-inset ring-white/10 hover:bg-violet-500/20"
        >
          Schedule a call
        </a> -->

        <form class="mt-10 text-left" @submit.prevent="submitForm">
          <div class="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <div class="grid gap-4">
              <label class="grid gap-2 text-sm">
                <span class="font-medium text-white">Name</span>
                <input v-model="name" type="text" required class="rounded-lg border border-white/15 bg-slate-950/30 px-3 py-2 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-300/20" placeholder="Jane Doe" />
              </label>
              <label class="grid gap-2 text-sm">
                <span class="font-medium text-white">Email</span>
                <input v-model="email" type="email" required class="rounded-lg border border-white/15 bg-slate-950/30 px-3 py-2 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-300/20" placeholder="jane@company.com" />
              </label>
              <label class="grid gap-2 text-sm">
                <span class="font-medium text-white">Message</span>
                <textarea v-model="message" rows="6" required class="rounded-lg border border-white/15 bg-slate-950/30 px-3 py-2 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-300/20" placeholder="A short message"></textarea>
              </label>
              <button type="submit" :disabled="loading" class="mt-2 inline-flex items-center justify-center rounded-md bg-violet-500/15 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-violet-100 ring-1 ring-inset ring-white/10 hover:bg-violet-500/20 disabled:opacity-60">
                <span v-if="!loading">Send</span>
                <span v-else>Sending…</span>
              </button>
              <p v-if="success" class="text-sm text-emerald-400">{{ success }}</p>
              <p v-if="error" class="text-sm text-rose-400">{{ error }}</p>
            </div>
          </div>
        </form>
      </div>
    </section>

    <section>
      <div class="mx-auto max-w-6xl px-4 py-10 text-center text-slate-400 text-xs">
        © {{ new Date().getFullYear() }} BridgeMind Consult • Coming Soon
      </div>
    </section>
  </div>
</template>
