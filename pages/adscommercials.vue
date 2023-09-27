<script setup>
const videos = await $fetch("https://api.npoint.io/2c873d27b87e9faa61d5");
</script>

<template>
  <div
    class="w-[80vw] h-[80%] overflow-y-auto text-white items-center flex flex-col gap-10 mt-14">
    <div class="grid grid-cols-2 gap-10 relative">
      <div v-for="video in videos" class="group relative hover:z-30">
        <div class="rounded-xl overflow-hidden">
          <iframe
            class="w-[35vw] h-[19.69vw] relative"
            :src="
              'https://www.youtube-nocookie.com/embed/' +
              video[0].match(/[?&]v=([^&]+)/)[1]
            "
            allowfullscreen></iframe>
        </div>
        <div
          class="cardDetails w-[35vw] bg-[#181818] p-4 rounded-b-xl absolute opacity-0 translate-y-[-100%] group-hover:translate-y-[-10px] group-hover:opacity-100 group-hover:transition-all transition-opacity group-hover:duration-300"
          v-if="video[1] != ''">
          <p>{{ video[1] }}</p>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>

<style>
.grid-cols-2 > .group {
  position: relative;
}

.rounded-xl.overflow-hidden iframe {
  z-index: 2;
}

.rounded-xl.overflow-hidden {
  z-index: 10;
}
</style>
