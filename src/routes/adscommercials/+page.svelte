<script>
  import { onMount } from "svelte";

  let data;
  let isLoading = true;
  let videos;

  async function fetchData() {
    fetch("https://api.npoint.io/8b2edb91816ddeb8905e").then((response) => {
      response.json().then((data) => {
        videos = data;

        console.log("loaded");
        console.log(videos);

        videos = Object.values(videos);

        isLoading = false;
      });
    });
  }

  let desktopWindow = true;

  //   let windowWidth;
  //   let desktopWindow;

  //   onMount(() => {
  //     windowWidth = window.innerWidth;

  //     desktopWindow = window.innerWidth > 1000;

  //     window.addEventListener("resize", onWidthChange);
  //     window.addEventListener("load", () => {
  //       windowWidth.value = window.innerWidth;
  //       desktopWindow.value = window.innerWidth > 1000;
  //     });
  //   });

  fetchData();
</script>

{#if isLoading}
  loading
{:else}
  <div
    class="w-[80vw] h-[80%] text-white flex-col gap-10 overflow-y-auto mt-14 max-[1000px]:h-[70%] max-[1000px]:mt-12"
  >
    <div class="flex flex-col items-center gap-10 text-white">
      <div class="relative gap-10 videos">
        {#each videos as video}
          <div class="group hover:z-10">
            <div class="overflow-hidden rounded-xl">
              <iframe
                class="video w-[35vw] h-[19.69vw] relative"
                src={"https://www.youtube-nocookie.com/embed/" +
                  video[0].match(/[?&]v=([^&]+)/)[1]}
                allowfullscreen
              ></iframe>
            </div>

            {#if desktopWindow}
              <div>
                {#if video[1] != ""}
                  <div
                    class="cardDetails w-[35vw] bg-[#181818] -z-10 p-4 rounded-b-xl absolute max-[1000px]:relative opacity-0 translate-y-[-100%] group-hover:translate-y-[-10px] group-hover:opacity-100 group-hover:transition-all transition-opacity group-hover:duration-300"
                  >
                    <p>{video[1]}</p>
                  </div>
                {/if}
                <br />
              </div>
            {:else}
              <div>
                <div
                  class="cardDetails bg-[#181818] p-4 rounded-b-xl absolute max-[1000px]:relative w-[35vw] max-[1000px]:w-[75vw] translate-y-[-10px]"
                  v-if="video[1] != ''"
                >
                  <p>{video[1]}</p>
                </div>
              </div>
            {/if}
          </div>
        {/each}
        <br />
      </div>
    </div>
  </div>
{/if}

<style scoped>
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
