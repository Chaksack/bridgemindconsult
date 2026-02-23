<template>
  <div class="relative isolate min-h-dvh overflow-hidden bg-slate-950 text-slate-50">
    <div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-10">
      <div class="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
      <div class="absolute -bottom-40 right-[-120px] h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-3xl" />
    </div>
    <SiteHeader />
    <main>
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>
