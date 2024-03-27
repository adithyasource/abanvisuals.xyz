<script setup>
const link = await $fetch("https://api.npoint.io/2ab65d1373696dc7d9d0");

const website = link["showReelLink"].match(
  /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/
);
</script>

<template>
  <div
    class="w-[80vw] h-[80%] text-white items-center justify-center flex flex-col gap-10 mt-14 max-[1000px]:mt-14 max-[1000px]:w-[90px]">
    <div v-if="website[0] === 'www.youtube.com'">
      <iframe
        class="video w-[60vw] h-[33.75vw]"
        :src="
          'https://www.youtube-nocookie.com/embed/' +
          link['showReelLink'].match(/[?&]v=([^&]+)/)[1]
        "
        allowfullscreen></iframe>
    </div>

    <div v-if="website[0] === 'vimeo.com'">
      <iframe
        :src="
          'https://player.vimeo.com/video/' +
          link['showReelLink'].match(/\/(\d+)$/)[1]
        "
        class="video w-[60vw] h-[33.75vw]"
        frameborder="0"
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen></iframe>
    </div>
  </div>
</template>
