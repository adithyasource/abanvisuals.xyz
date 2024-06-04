import { SECRET_YOUTUBE_API } from "$env/static/private";

export async function load() {
  let youtubeVideosWithViews = {};

  let videos = await fetch("https://api.npoint.io/8619bd1a5b4d59f26bb0");

  videos = await videos.json();

  let regExp = /^.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;

  for (let key in videos) {
    let website = videos[key][0].match(
      /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/
    );

    if (website[0] == "www.youtube.com") {
      let videoId = videos[key][0].match(regExp)[1];

      let youtubeData = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${SECRET_YOUTUBE_API}`
      );

      youtubeData = await youtubeData.json();

      let videoViews = youtubeData.items[0].statistics.viewCount;
      youtubeVideosWithViews = {
        ...youtubeVideosWithViews,
        [key]: [...videos[key], videoViews],
      };

      delete videos[key];
    }

    videos = { ...videos, ...youtubeVideosWithViews };
  }

  return videos;
}
