<script setup>
const videos = await $fetch("https://api.npoint.io/18b19d10e2ff5329e5b5");
const windowWidth = ref(window.innerWidth);

const desktopWindow = ref(window.innerWidth > 1000);

function onWidthChange() {
  windowWidth.value = window.innerWidth;
  desktopWindow.value = window.innerWidth > 1000;
}

onMounted(() => {
  window.addEventListener("resize", onWidthChange);
  window.addEventListener("load", () => {
    onWidthChange();
  });
});
onUnmounted(() => {
  window.removeEventListener("resize", onWidthChange);
  window.removeEventListener("load", onWidthChange);
});
</script>

<template>
  <div
    class="w-[80vw] h-[80%] text-white flex-col gap-10 overflow-y-auto mt-14 max-[1000px]:h-[70%] max-[1000px]:mt-12">
    <div class="text-white items-center flex flex-col gap-10">
      <div class="videos gap-10 relative">
        <div v-for="video in videos" class="group hover:z-10">
          <div class="rounded-xl overflow-hidden">
            <iframe
              class="video w-[35vw] h-[19.69vw] relative"
              :src="
                'https://www.youtube-nocookie.com/embed/' +
                video[0].match(/[?&]v=([^&]+)/)[1]
              "
              allowfullscreen></iframe>
          </div>
          <div v-if="desktopWindow">
            <div
              class="cardDetails w-[35vw] bg-[#181818] -z-10 p-4 rounded-b-xl absolute max-[1000px]:relative opacity-0 translate-y-[-100%] group-hover:translate-y-[-10px] group-hover:opacity-100 group-hover:transition-all transition-opacity group-hover:duration-300"
              v-if="video[1] != ''">
              <p>{{ video[1] }}</p>
            </div>
            <br />
          </div>
          <div v-else>
            <div
              class="cardDetails bg-[#181818] p-4 rounded-b-xl absolute max-[1000px]:relative w-[35vw] max-[1000px]:w-[75vw] translate-y-[-10px] group-hover:duration-300"
              v-if="video[1] != ''">
              <p>{{ video[1] }}</p>
            </div>
          </div>
        </div>
        <br />
      </div>
    </div>
  </div>
</template>

<style>
.videos {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

@media only screen and (max-width: 1000px) {
  .videos {
    display: grid;
    grid-template-columns: 1fr;
  }
  .video {
    width: 75vw;
    height: 42.19vw;
  }
}
</style>
