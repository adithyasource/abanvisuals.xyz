<script setup>
const videos = await $fetch("https://api.npoint.io/41663ed5cd91e18f1ccd");
</script>

<template>
  <div
    class="w-[80vw] h-[80%] text-white flex-col gap-10 overflow-y-auto mt-14">
    <div class="text-white items-center flex flex-col gap-10">
      <div class="grid grid-cols-2 gap-10 relative">
        <div v-for="video in videos" class="group hover:z-10">
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
        <br />
      </div>
    </div>
  </div>
</template>
