<script setup>
const showreel =
  "https://www.youtube-nocookie.com/embed/" +
  (
    await $fetch("https://api.npoint.io/db11c3e202c19601633e")
  ).portfolioLink.match(/[?&]v=([^&]+)/)[1];

console.log(showreel);
</script>

<template>
  <div
    class="w-[80vw] h-[80%] text-white items-center justify-center flex flex-col gap-10">
    <div>
      <iframe
        class="w-[60vw] h-[33.75vw]"
        :src="showreel"
        allowfullscreen></iframe>
    </div>
  </div>
</template>
