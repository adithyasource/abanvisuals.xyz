<script>
  import { onMount } from "svelte";

  let data;
  let isLoading = true;
  let videos;

  async function fetchData() {
    fetch("https://api.npoint.io/8619bd1a5b4d59f26bb0").then((response) => {
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
    <div class="text-white items-center flex flex-col gap-10">
      <div class="videos gap-10 relative">
        {#each videos as video}
          <div class="group hover:z-10">
            <div class="rounded-xl overflow-hidden relative">
              <a href={video[0]} target="_blank"
                ><img
                  src={video[2]}
                  class="video w-[20vw] h-[35.56vw]"
                  alt=""
                /></a
              >
            </div>
            <!-- <div v-if="desktopWindow">
              <div
                class="cardDetails w-[20vw] bg-[#181818] p-4 -z-10 rounded-b-xl absolute max-[1000px]:relative opacity-0 translate-y-[-100%] group-hover:translate-y-[-10px] group-hover:opacity-100 group-hover:transition-all transition-opacity group-hover:duration-300"
                v-if="video[1] != ''"
              >
                <p>{video[1]}</p>
              </div>
              <br />
            </div>
            <div v-else>
              <div
                class="cardDetails bg-[#181818] p-4 rounded-b-xl absolute max-[1000px]:relative w-[20vw] max-[1000px]:w-[75vw] translate-y-[-10px] group-hover:duration-300"
                v-if="video[1] != ''"
              >
                <p>{video[1]}</p>
              </div>
            </div> -->
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
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media only screen and (max-width: 1000px) {
    .videos {
      display: grid;
      grid-template-columns: 1fr;
    }

    .video {
      width: 75vw;
      height: auto;
    }
  }
</style>
