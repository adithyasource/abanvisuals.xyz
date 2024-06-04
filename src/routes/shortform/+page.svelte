<script>
  import { onMount } from "svelte";

  export let data;
  $: videos = Object.values(data);
  let desktopWindow;
  let windowWidth;

  function formatNumberWithCommas(number) {
    let numberString = number.toString();
    let parts = numberString.split(".");
    let integerPart = parts[0];
    let decimalPart = parts[1] || "";
    let integerWithCommas = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if (decimalPart !== "") {
      return integerWithCommas + "." + decimalPart;
    } else {
      return integerWithCommas;
    }
  }

  function onWidthChange() {
    windowWidth = window.innerWidth;
    desktopWindow = window.innerWidth > 1000;
  }

  onMount(() => {
    windowWidth = window.innerWidth;
    desktopWindow = window.innerWidth > 1000;
    window.addEventListener("resize", () => {
      onWidthChange();
    });
    window.addEventListener("load", () => {
      onWidthChange();
    });
  });
</script>

<div
  class="w-[80vw] h-[80%] text-white flex-col gap-10 overflow-y-auto mt-14 max-[1000px]:h-[70%] max-[1000px]:mt-12">
  <div class="text-white items-center flex flex-col gap-10">
    <div class="videos gap-10 relative">
      {#each videos as video}
        <div class="group hover:z-10">
          <div class="rounded-xl overflow-hidden relative">
            <a href={video[0]} target="_blank">
              <img src={video[2]} class="video w-[20vw] h-[35.56vw]" alt="" />
            </a>
          </div>
          {#if desktopWindow}
            <div>
              {#if (parseInt(video[3]) > 100) | (video[1] != "")}
                <div
                  class="cardDetails w-[20vw] bg-[#0C0C0C] -z-10 p-4 rounded-b-xl absolute max-[1000px]:relative opacity-0 translate-y-[-100%] group-hover:translate-y-[-10px] group-hover:opacity-100 group-hover:transition-all transition-opacity group-hover:duration-300">
                  <div
                    class="font-bold text-xl absolute pt-1 pb-2 flex border bg-gradient-to-b blur-xl from-[#FF7200] to-[#FF7200] bg-clip-text text-transparent">
                    {#if parseInt(video[3]) > 100}
                      {formatNumberWithCommas(video[3])} views
                    {/if}
                  </div>
                  <div
                    class="font-bold text-xl relative top-0 pt-1 pb-2 h-auto flex bg-gradient-to-b items-center from-[#FF7200] to-[#FF7200] bg-clip-text text-transparent">
                    {#if parseInt(video[3]) > 100}
                      {formatNumberWithCommas(video[3])} views
                    {/if}
                  </div>
                  {#if video[1] != ""}
                    <p>{video[1]}</p>
                  {/if}
                </div>
                <br />
              {/if}
            </div>
          {:else}
            <div>
              {#if (parseInt(video[3]) > 100) | (video[1] != "")}
                <div
                  class="cardDetails bg-[#0C0C0C] p-4 rounded-b-xl absolute max-[1000px]:relative w-[35vw] max-[1000px]:w-[75vw] translate-y-[-10px]">
                  <div
                    class="font-bold text-l absolute pb-2 flex border bg-gradient-to-b blur-xl from-[#FF7200] to-[#FF7200] bg-clip-text text-transparent">
                    {#if parseInt(video[3]) > 100}
                      {formatNumberWithCommas(video[3])} views
                    {/if}
                  </div>
                  <div
                    class="font-bold text-l relative top-0 pb-2 h-auto flex bg-gradient-to-b items-center from-[#FF7200] to-[#FF7200] bg-clip-text text-transparent">
                    {#if parseInt(video[3]) > 100}
                      {formatNumberWithCommas(video[3])} views
                    {/if}
                  </div>
                  <p>{video[1]}</p>
                </div>
              {/if}
            </div>
          {/if}
        </div>
      {/each}
      <br />
    </div>
  </div>
</div>

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
