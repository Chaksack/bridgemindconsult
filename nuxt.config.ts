// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  components: true,

  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'BridgeMind Consult — Coming Soon',
      meta: [
        {
          name: 'description',
          content: 'BridgeMind Consult — Coming Soon. Get notified or contact us using the form.',
        },
      ],
    },
  },

  runtimeConfig: {
    // private
    smtpHost: process.env.NUXT_SMTP_HOST,
    smtpPort: process.env.NUXT_SMTP_PORT,
    smtpUser: process.env.NUXT_SMTP_USER,
    smtpPass: process.env.NUXT_SMTP_PASS,
    smtpSecure: process.env.NUXT_SMTP_SECURE,
    // public: {}
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
