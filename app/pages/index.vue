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
          For inquires get in touch below.
        </h1>
        <!-- <p class="mt-5 text-base leading-7 text-slate-300 md:text-lg">For inquires get in touch below.</p> -->

        <!-- <a
          href="https://ablink.send.calendly.com/ls/click?upn=u001.-2FpFZHOmNsCfytAyhc9roxL6zsEMEmDzCO9U0PFpkjGKKWk-2FlgTdaBazFL1o4ehXVSD7fbm7lCv5bNe2Y35yC6F96w3WYkJ3xPxZ-2FUaUnHA7u0Ma6i0iyqWWDtvR-2BLWQWhxYZwNGl1LgCnpLJVVaDEcMXBCrTAI-2F8GAC915RBx-2Bm4rOPIiqNAW-2BUMKr5GZ-2Ftg-2BQqSr3vvT73P4x0gRhb3JrKRCT3SQT-2F2OhctEPGgniJQJ-2BPGL-2FL8qshaf0uUDPLdiz0X_3LV2-2FmVsoMfkhi0z3424-2FczqrmFtjP6qgP7lCAb8LHQLHQBJ5qBygKz55TNe32OrmwRjKHKE0Y42giGyPmpvnId1i3lgOdLfkxi6YM-2FjSTcElXinL4lD3wQlDK9TCpUtqDxP2NY5-2FvYjzCksJiT5-2BVxralnHCfqMtF9J6ASDBbXjmzK6i97GtL2yd-2BdkME8D5InnfKZhwfes-2BZqLT3FbxkgChIqlQpeOQcSB9NdP99IqXde0Aa3SHp-2FbNy-2BWgzTHdXS2uUxlQfoOiFd-2BGiLtIShf6nYEd5QvnEi5qLjt-2FiVPSAmNrqNUXndVs22Ok8CRL6XL4AtvbUWkMPaq0xzJx1yom214faYCQRwQpcz35961oV29INKOXiS2-2BhhoWpRny2Wk0MA-2BnguYzfETl6Mnp34pjQ2PGSlvcAm-2BL5FOr4rsg4tlFD-2FvFHC5QQ9AutDQUAM5dysoZYBOSW4X-2BgaZOfz5QCKH1TdLcyoey4FN6Y0GT8LhnzcQhyVuPnWbhypQ0AKY7GbdRh1Qnwc7Q-2BazRY97w9eEB-2B-2BBC2oR-2FaqWazElYGArtx4Mzqo7Ta1kK4tNQL8-2FPAvlGqcgXqGqIxqxKG7yQnzJkrKa1GlIheGGqK91FXpwLHGO-2FNSVBRiVTnm1b0c4BpPjhq2-2B3-2BXEj-2F0R3nYuBh4mMZS37Z9w5FOcJPgAvD8E2JxOMdKZLQsFUXMS-2BRYbyZ-2F6xCNmAUKCD2eV1RyDCC-2Be56Y8E6m1brBz1YUyOVs4R6ax4KbJt9fXxUA7"
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
        © {{ new Date().getFullYear() }} BridgeMind Consult. All rights reserved.
      </div>
    </section>
  </div>
</template>
