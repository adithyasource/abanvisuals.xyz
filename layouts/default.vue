<template>
  <div class="h-screen w-screen flex justify-center">
    <slot />
    <div class="absolute bottom-10">
      <div class="text-white flex gap-10 items-end">
        <div class="flex flex-col gap-2 group">
          <NuxtLink
            class="transition-colors duration-500 border border-[#3A3A3A] border-t-1.5 border-l-0 border-r-0 border-b-0 bg-gradient-to-b from-[#0F0F0F] to-black py-1.5 px-3 rounded-md hover:bg-gradient-to-b hover:from-[#161616] hover:to-[#080808]"
            to="/"
            >Home</NuxtLink
          >
        </div>
        <div class="flex flex-col gap-2 group">
          <NuxtLink
            class="transition-colors border border-[#3A3A3A] border-t-1.5 border-l-0 border-r-0 border-b-0 bg-gradient-to-b from-[#0F0F0F] to-black py-1.5 px-3 rounded-md hover:bg-gradient-to-b hover:from-[#161616] hover:to-[#080808]"
            to="/showreel"
            >Showreel</NuxtLink
          >
        </div>
        <div class="flex flex-col gap-2 group">
          <NuxtLink
            class="transition-colors border border-[#3A3A3A] border-t-1.5 border-l-0 border-r-0 border-b-0 bg-gradient-to-b from-[#0F0F0F] to-black py-1.5 px-3 rounded-md hover:bg-gradient-to-b hover:from-[#161616] hover:to-[#080808]"
            to="/adscommercials"
            >Ads/Commercial</NuxtLink
          >
        </div>
        <div class="flex flex-col gap-2 group">
          <NuxtLink
            class="group-hover:opacity-100 transition-opacity opacity-0 duration-200 border border-[#3A3A3A] border-t-1.5 border-l-0 border-r-0 border-b-0 bg-gradient-to-b from-[#0F0F0F] to-black py-1.5 px-3 rounded-md hover:bg-gradient-to-b hover:from-[#161616] hover:to-[#080808]"
            to="/lifestyle"
            style="z-index: 100">
            Lifestyle
          </NuxtLink>
          <NuxtLink
            class="group-hover:opacity-100 transition-opacity opacity-0 duration-100 border border-[#3A3A3A] border-t-1.5 border-l-0 border-r-0 border-b-0 bg-gradient-to-b from-[#0F0F0F] to-black py-1.5 px-3 rounded-md hover:bg-gradient-to-b hover:from-[#161616] hover:to-[#080808]"
            to="/finance"
            style="z-index: 100">
            Finance
          </NuxtLink>
          <p
            class="transition-colors cursor-pointer border border-[#3A3A3A] border-t-1.5 border-l-0 border-r-0 border-b-0 bg-gradient-to-b from-[#0F0F0F] to-black py-1.5 px-3 rounded-md hover:bg-gradient-to-b hover:from-[#161616] hover:to-[#080808]"
            style="z-index: 100">
            Long Form
          </p>
        </div>
        <div class="flex flex-col gap-2 group">
          <NuxtLink
            class="transition-colors border border-[#3A3A3A] border-t-1.5 border-l-0 border-r-0 border-b-0 bg-gradient-to-b from-[#0F0F0F] to-black py-1.5 px-3 rounded-md hover:bg-gradient-to-b hover:from-[#161616] hover:to-[#080808]"
            to="/shortform"
            >Short Form</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>
