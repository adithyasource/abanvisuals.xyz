<template>
  <div
    style="
      background-image: url('iPhone 14 - 2.svg');
      width: 100%;
      height: 100vh;
    "
    class="font-spaceMono">
    <NuxtLayout>
      <NuxtPage />
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
</style>
