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
        <a
          href="https://ablink.send.calendly.com/ls/click?upn=u001.-2FpFZHOmNsCfytAyhc9roxL6zsEMEmDzCO9U0PFpkjGKKWk-2FlgTdaBazFL1o4ehXVSD7fbm7lCv5bNe2Y35yC6F96w3WYkJ3xPxZ-2FUaUnHA7u0Ma6i0iyqWWDtvR-2BLWQWhxYZwNGl1LgCnpLJVVaDEcMXBCrTAI-2F8GAC915RBx-2Bm4rOPIiqNAW-2BUMKr5GZ-2Ftg-2BQqSr3vvT73P4x0gRhb3JrKRCT3SQT-2F2OhctEPGgniJQJ-2BPGL-2FL8qshaf0uUDPLdiz0X_3LV2-2FmVsoMfkhi0z3424-2FczqrmFtjP6qgP7lCAb8LHQLHQBJ5qBygKz55TNe32OrmwRjKHKE0Y42giGyPmpvnId1i3lgOdLfkxi6YM-2FjSTcElXinL4lD3wQlDK9TCpUtqDxP2NY5-2FvYjzCksJiT5-2BVxralnHCfqMtF9J6ASDBbXjmzK6i97GtL2yd-2BdkME8D5InnfKZhwfes-2BZqLT3FbxkgChIqlQpeOQcSB9NdP99IqXde0Aa3SHp-2FbNy-2BWgzTHdXS2uUxlQfoOiFd-2BGiLtIShf6nYEd5QvnEi5qLjt-2FiVPSAmNrqNUXndVs22Ok8CRL6XL4AtvbUWkMPaq0xzJx1yom214faYCQRwQpcz35961oV29INKOXiS2-2BhhoWpRny2Wk0MA-2BnguYzfETl6Mnp34pjQ2PGSlvcAm-2BL5FOr4rsg4tlFD-2FvFHC5QQ9AutDQUAM5dysoZYBOSW4X-2BgaZOfz5QCKH1TdLcyoey4FN6Y0GT8LhnzcQhyVuPnWbhypQ0AKY7GbdRh1Qnwc7Q-2BazRY97w9eEB-2B-2BBC2oR-2FaqWazElYGArtx4Mzqo7Ta1kK4tNQL8-2FPAvlGqcgXqGqIxqxKG7yQnzJkrKa1GlIheGGqK91FXpwLHGO-2FNSVBRiVTnm1b0c4BpPjhq2-2B3-2BXEj-2F0R3nYuBh4mMZS37Z9w5FOcJPgAvD8E2JxOMdKZLQsFUXMS-2BRYbyZ-2F6xCNmAUKCD2eV1RyDCC-2Be56Y8E6m1brBz1YUyOVs4R6ax4KbJt9fXxUA7"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex rounded-md bg-violet-500/15 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-violet-100 ring-1 ring-inset ring-white/10 hover:bg-violet-500/20"
        >
          Schedule a call
        </a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import logoUrl from '../assets/logo.png'
</script>
