<script setup>
const ads = await $fetch("https://api.npoint.io/2c873d27b87e9faa61d5");
</script>

<template>
  <div
    class="w-[80vw] h-[80%] overflow-y-auto text-white items-center flex flex-col gap-10">
    <div class="grid grid-cols-2 gap-4">
      <div v-for="ad in ads">
        <iframe
          class="w-[30vw] h-[16.88vw]"
          :src="
            'https://www.youtube-nocookie.com/embed/' +
            ad[0].match(/[?&]v=([^&]+)/)[1]
          "
          allowfullscreen></iframe>
      </div>
    </div>
  </div>
</template>
