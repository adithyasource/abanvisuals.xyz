<template>
  <div class="flex justify-center h-screen">
    <slot />
    <div
      class="absolute bottom-10 max-[1000px]:text-sm overflow-x-scroll scrollbar-hide">
      <div class="text-white flex gap-10 items-end max-[1000px]:w-[80vw]">
        <div class="flex flex-col gap-2 group">
          <NuxtLink
            class="transition-colors max-[1000px]:w-max duration-500 border border-[#3A3A3A] border-t-1.5 border-l-0 border-r-0 border-b-0 bg-gradient-to-b from-[#0F0F0F] to-black py-1.5 px-3 rounded-md hover:bg-gradient-to-b hover:from-[#161616] hover:to-[#080808]"
            to="/"
            >Home</NuxtLink
          >
        </div>
        <div class="flex flex-col gap-2 group">
          <NuxtLink
            class="transition-colors max-[1000px]:w-max duration-500 border border-[#3A3A3A] border-t-1.5 border-l-0 border-r-0 border-b-0 bg-gradient-to-b from-[#0F0F0F] to-black py-1.5 px-3 rounded-md hover:bg-gradient-to-b hover:from-[#161616] hover:to-[#080808]"
            to="/showreel"
            >Showreel</NuxtLink
          >
        </div>
        <div class="flex flex-col gap-2 group">
          <NuxtLink
            class="transition-colors max-[1000px]:w-max border border-[#3A3A3A] border-t-1.5 border-l-0 border-r-0 border-b-0 bg-gradient-to-b from-[#0F0F0F] to-black py-1.5 px-3 rounded-md hover:bg-gradient-to-b hover:from-[#161616] hover:to-[#080808]"
            to="/adscommercials"
            >Ads/Commercial</NuxtLink
          >
        </div>
        <div class="flex flex-col gap-2 group">
          <NuxtLink
            class="group-hover:opacity-100 max-[1000px]:hidden max-[1000px]:group-hover:block max-[1000px]:transition-none max-[1000px]:w-max transition-opacity opacity-0 duration-200 border border-[#3A3A3A] border-t-1.5 border-l-0 border-r-0 border-b-0 bg-gradient-to-b from-[#0F0F0F] to-black py-1.5 px-3 rounded-md hover:bg-gradient-to-b hover:from-[#161616] hover:to-[#080808]"
            to="/lifestyle"
            style="z-index: 100">
            Lifestyle
          </NuxtLink>
          <NuxtLink
            class="group-hover:opacity-100 max-[1000px]:hidden max-[1000px]:group-hover:block max-[1000px]:transition-none max-[1000px]:w-max transition-opacity opacity-0 duration-100 border border-[#3A3A3A] border-t-1.5 border-l-0 border-r-0 border-b-0 bg-gradient-to-b from-[#0F0F0F] to-black py-1.5 px-3 rounded-md hover:bg-gradient-to-b hover:from-[#161616] hover:to-[#080808]"
            to="/finance"
            style="z-index: 100">
            Finance
          </NuxtLink>
          <NuxtLink
            class="group-hover:opacity-100 max-[1000px]:hidden max-[1000px]:group-hover:block max-[1000px]:transition-none max-[1000px]:w-max transition-opacity opacity-0 duration-100 border border-[#3A3A3A] border-t-1.5 border-l-0 border-r-0 border-b-0 bg-gradient-to-b from-[#0F0F0F] to-black py-1.5 px-3 rounded-md hover:bg-gradient-to-b hover:from-[#161616] hover:to-[#080808]"
            to="/documentary"
            style="z-index: 100">
            Docu
          </NuxtLink>
          <p
            class="transition-colors max-[1000px]:w-max cursor-pointer border border-[#3A3A3A] border-t-1.5 border-l-0 border-r-0 border-b-0 bg-gradient-to-b from-[#0F0F0F] to-black py-1.5 px-3 rounded-md hover:bg-gradient-to-b hover:from-[#161616] hover:to-[#080808]"
            style="z-index: 100">
            Long Form
          </p>
        </div>
        <div class="flex flex-col gap-2 group">
          <NuxtLink
            class="transition-colors max-[1000px]:w-max border border-[#3A3A3A] border-t-1.5 border-l-0 border-r-0 border-b-0 bg-gradient-to-b from-[#0F0F0F] to-black py-1.5 px-3 rounded-md hover:bg-gradient-to-b hover:from-[#161616] hover:to-[#080808]"
            to="/shortform"
            >Short Form</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media only screen and (max-width: 1000px) {
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
}

.navBarButton {
  filter: drop-shadow(0px 0px 5px rgba(255, 255, 255, 0));
  transform: scale(1);
  transition: all 0.3s ease;
}

.navBarButton:hover {
  filter: drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.6));
  transform: scale(1.05);
}
</style>
