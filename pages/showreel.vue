<script setup>
const showreel =
  "https://www.youtube-nocookie.com/embed/" +
  (
    await $fetch("https://api.npoint.io/2ab65d1373696dc7d9d0")
  ).showReelLink.match(/[?&]v=([^&]+)/)[1];
</script>

<template>
  <div
    class="w-[80vw] h-[80%] text-white items-center justify-center flex flex-col gap-10 mt-14 max-[1000px]:mt-28 max-[1000px]:w-[90px]">
    <div>
      <iframe
        class="video w-[60vw] h-[33.75vw]"
        :src="showreel"
        allowfullscreen></iframe>
    </div>
  </div>
</template>
