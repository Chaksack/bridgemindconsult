<template>
  <header class="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
      <NuxtLink to="/" class="flex items-center gap-3 text-slate-50">
        <span class="inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-md bg-white ring-1 ring-inset ring-white/10">
          <img :src="logoUrl" alt="BridgeMind Consult logo" class="h-full w-full object-contain p-1" />
        </span>
        <span class="text-sm font-semibold tracking-tight">BridgeMind Consult</span>
      </NuxtLink>

      <nav class="hidden items-center gap-6 text-xs font-medium uppercase tracking-wide text-slate-200 md:flex">
      </nav>

      <div class="flex items-center gap-3">
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import logoUrl from '../assets/logo.png'
</script>
