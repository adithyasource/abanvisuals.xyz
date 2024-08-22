<script>
  import { onMount } from "svelte";

  let videos = [
    [
        "https://postedapp.com/index",
        "description",
        "https://i.ibb.co/yhRpRZJ/postedapp-com-index.webp"
    ],
    [
        "https://postedapp.com/brands",
        "",
        "https://i.ibb.co/54dzK0H/postedapp-com-brands.webp"
    ],
    [
        "https://courses.accelerate-re.com/new-accelerate-page",
        "description",
        "https://i.ibb.co/Mpv0LMW/courses-accelerate-com-new-accelerate-page.webp"
    ]
  ]

  let desktopWindow;
  let windowWidth;

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
  <div class="flex flex-col items-center gap-10 text-white">
    <div class="relative gap-10 videos">
      {#each videos as video}
        <div class="group hover:z-10">
          <div class="overflow-hidden rounded-xl">
            <a href={video[0]} target="_blank">
              <img src={video[2]} alt=""/>
            </a>
          </div>
          {#if desktopWindow}
            <div>
              {#if video[1] != ""}
                <div
                  class="cardDetails w-[35vw] bg-[#0C0C0C] -z-10 p-4 rounded-b-xl absolute max-[1000px]:relative opacity-0 translate-y-[-100%] group-hover:translate-y-[-10px] group-hover:opacity-100 group-hover:transition-all transition-opacity group-hover:duration-300">
                    <p>{video[1]}</p>
                </div>
                <br />
              {/if}
            </div>
          {:else}
            <div>
              {#if (video[1] != "")}
                <div
                  class="cardDetails bg-[#0C0C0C] p-4 rounded-b-xl absolute max-[1000px]:relative w-[35vw] max-[1000px]:w-[75vw] translate-y-[-10px]">
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
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 1000px) {
    .videos {
      display: grid;
      grid-template-columns: 1fr;
    }
  }
</style>
