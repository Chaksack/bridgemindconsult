<script setup lang="ts">
// Simple redirect notice to use the homepage form
useHead({ title: 'Contact • BridgeMind Consult' })
</script>

<template>
  <div class="mx-auto max-w-3xl px-4 py-16 md:py-24">
    <div class="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
      <h1 class="text-2xl font-semibold tracking-tight text-white">Contact</h1>
      <p class="mt-3 text-sm leading-6 text-slate-300">
        Our website is coming soon. Please use the contact form on the homepage to reach us.
      </p>
      <NuxtLink
        to="/"
        class="mt-6 inline-flex items-center justify-center rounded-md bg-violet-500/15 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-violet-100 ring-1 ring-inset ring-white/10 hover:bg-violet-500/20"
      >
        Go to homepage form
      </NuxtLink>
    </div>
  </div>
</template>
