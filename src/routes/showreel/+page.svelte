<script>
  let link;
  let website;

  export let data;
  $: link = data["showReelLink"];

  $: website = link.match(
    /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/,
  );
</script>

<div
  class="w-[100vw] h-[80%] text-white items-center justify-center flex flex-col gap-10 mt-14 max-[1000px]:mt-14">
  {#if website[0] == "www.youtube.com"}
    <div>
      <iframe
        class="video aspect-video w-[70vw] h-auto !rounded-xl"
        src={"https://www.youtube-nocookie.com/embed/" +
          link.match(/[?&]v=([^&]+)/)[1]}
        allowfullscreen></iframe>
    </div>
  {/if}

  {#if website[0] == "vimeo.com"}
    <div>
      <iframe
        src={"https://player.vimeo.com/video/" + link.match(/\/(\d+)$/)[1]}
        class="video aspect-video w-[70vw] h-auto !rounded-xl"
        frameborder="0"
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen></iframe>
    </div>
  {/if}
</div>
