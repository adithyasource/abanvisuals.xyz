<script>
  import "../app.css";

  import bg from "$lib/public/background.svg";

  let showLongFormMemu = false;
</script>

<main>
  <div
    class="flex justify-center h-screen"
    style={`background-image: url(${bg}); width: 100%; height: 100vh`}>
    <slot />
    <div
      class="absolute bottom-10 max-[1000px]:text-sm overflow-x-scroll scrollbar-hide">
      <div class="text-white flex gap-10 items-end max-[1000px]:w-[80vw]">
        <div class="flex flex-col gap-2 group">
          <a
            class="transition-colors max-[1000px]:w-max duration-500 border border-[#3A3A3A] border-t-1.5 border-l-0 border-r-0 border-b-0 bg-gradient-to-b from-[#0F0F0F] to-black py-1.5 px-3 rounded-md hover:bg-gradient-to-b hover:from-[#161616] hover:to-[#080808]"
            href="/">Home</a>
        </div>
        <div class="flex flex-col gap-2 group">
          <a
            class="transition-colors max-[1000px]:w-max duration-500 border border-[#3A3A3A] border-t-1.5 border-l-0 border-r-0 border-b-0 bg-gradient-to-b from-[#0F0F0F] to-black py-1.5 px-3 rounded-md hover:bg-gradient-to-b hover:from-[#161616] hover:to-[#080808]"
            href="/showreel">Showreel</a>
        </div>
        <div class="flex flex-col gap-2 group">
          <a
            class="transition-colors max-[1000px]:w-max border border-[#3A3A3A] border-t-1.5 border-l-0 border-r-0 border-b-0 bg-gradient-to-b from-[#0F0F0F] to-black py-1.5 px-3 rounded-md hover:bg-gradient-to-b hover:from-[#161616] hover:to-[#080808]"
            href="/adscommercials">Ads/Commercial</a>
        </div>
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div
          class="flex flex-col gap-2"
          on:mouseleave={() => {
            showLongFormMemu = false;
          }}>
          {#if showLongFormMemu}
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div class="flex flex-col gap-2 group">
              <a
                class="max-[1000px]:w-max border border-[#3A3A3A] border-t-1.5 border-l-0 border-r-0 border-b-0 bg-gradient-to-b from-[#0F0F0F] to-black py-1.5 px-3 rounded-md hover:bg-gradient-to-b hover:from-[#161616] hover:to-[#080808]"
                href="/lifestyle"
                style="z-index: 100">
                Lifestyle
                <button
                  on:click={() => {
                    showLongFormMemu = false;
                  }}>
                </button>
              </a>
              <a
                class="max-[1000px]:w-max border border-[#3A3A3A] border-t-1.5 border-l-0 border-r-0 border-b-0 bg-gradient-to-b from-[#0F0F0F] to-black py-1.5 px-3 rounded-md hover:bg-gradient-to-b hover:from-[#161616] hover:to-[#080808]"
                href="/finance"
                style="z-index: 100">
                Finance
                <button
                  on:click={() => {
                    showLongFormMemu = false;
                  }}></button>
              </a>
              <a
                class="max-[1000px]:w-max border border-[#3A3A3A] border-t-1.5 border-l-0 border-r-0 border-b-0 bg-gradient-to-b from-[#0F0F0F] to-black py-1.5 px-3 rounded-md hover:bg-gradient-to-b hover:from-[#161616] hover:to-[#080808]"
                href="/documentary"
                style="z-index: 100"
                ><button
                  on:click={() => {
                    showLongFormMemu = false;
                  }}>
                  Docu</button>
              </a>
              <a
                class="max-[1000px]:w-max border border-[#3A3A3A] border-t-1.5 border-l-0 border-r-0 border-b-0 bg-gradient-to-b from-[#0F0F0F] to-black py-1.5 px-3 rounded-md hover:bg-gradient-to-b hover:from-[#161616] hover:to-[#080808]"
                href="/podcasts"
                style="z-index: 100"
                ><button
                  on:click={() => {
                    showLongFormMemu = false;
                  }}>
                  Podcasts</button>
              </a>
            </div>
          {/if}
          <button
            class="transition-colors max-[1000px]:w-max cursor-pointer border border-[#3A3A3A] border-t-1.5 border-l-0 border-r-0 border-b-0 bg-gradient-to-b from-[#0F0F0F] to-black py-1.5 px-3 rounded-md hover:bg-gradient-to-b hover:from-[#161616] hover:to-[#080808]"
            style="z-index: 100"
            on:click={() => {
              showLongFormMemu = !showLongFormMemu;
            }}
            on:mouseenter={() => {
              showLongFormMemu = true;
            }}>
            Long Form
          </button>
        </div>

        <div class="flex flex-col gap-2 group">
          <a
            class="transition-colors max-[1000px]:w-max border border-[#3A3A3A] border-t-1.5 border-l-0 border-r-0 border-b-0 bg-gradient-to-b from-[#0F0F0F] to-black py-1.5 px-3 rounded-md hover:bg-gradient-to-b hover:from-[#161616] hover:to-[#080808]"
            href="/shortform">Short Form</a>
        </div>
      </div>
    </div>
  </div>
</main>

<style scoped>
  @media only screen and (max-width: 1000px) {
    .scrollbar-hide::-webkit-scrollbar {
      display: none;
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
    }
  }
</style>
