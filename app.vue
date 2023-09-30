<template>
  <div
    style="background-image: url('background.svg'); width: 100%; height: 100vh"
    class="font-spaceMono">
    <NuxtLayout>
      <NuxtPage class="overflow-y-hidden" />
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(5px);
  transform: scale(0.98);
}
html {
  overflow-y: hidden;
}
</style>
