<template>
  <div class="h-screen flex items-center justify-center flex-col gap-10">
    <slot />
    <nav class="text-white flex gap-10">
      <NuxtLink
        class="transition-colors duration-500 border border-[#3A3A3A] border-t-1.5 border-l-0 border-r-0 border-b-0 bg-gradient-to-b from-[#0F0F0F] to-black py-1.5 px-3 rounded-md hover:bg-gradient-to-b hover:from-[#161616] hover:to-[#080808]"
        to="/"
        >Home</NuxtLink
      >
      <NuxtLink
        class="transition-colors border border-[#3A3A3A] border-t-1.5 border-l-0 border-r-0 border-b-0 bg-gradient-to-b from-[#0F0F0F] to-black py-1.5 px-3 rounded-md hover:bg-gradient-to-b hover:from-[#161616] hover:to-[#080808]"
        to="/showreel"
        >Showreel</NuxtLink
      >
      <NuxtLink
        class="transition-colors border border-[#3A3A3A] border-t-1.5 border-l-0 border-r-0 border-b-0 bg-gradient-to-b from-[#0F0F0F] to-black py-1.5 px-3 rounded-md hover:bg-gradient-to-b hover:from-[#161616] hover:to-[#080808]"
        to="/adscommercials"
        >Ads/Commercial</NuxtLink
      >
      <NuxtLink
        class="transition-colors border border-[#3A3A3A] border-t-1.5 border-l-0 border-r-0 border-b-0 bg-gradient-to-b from-[#0F0F0F] to-black py-1.5 px-3 rounded-md hover:bg-gradient-to-b hover:from-[#161616] hover:to-[#080808]"
        to="/longform"
        >Long Form</NuxtLink
      >
      <NuxtLink
        class="transition-colors border border-[#3A3A3A] border-t-1.5 border-l-0 border-r-0 border-b-0 bg-gradient-to-b from-[#0F0F0F] to-black py-1.5 px-3 rounded-md hover:bg-gradient-to-b hover:from-[#161616] hover:to-[#080808]"
        to="/shortform"
        >Short Form</NuxtLink
      >
    </nav>
  </div>
</template>

<style></style>
