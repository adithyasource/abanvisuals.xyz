import { SECRET_YOUTUBE_API } from "$env/static/private";

export async function load() {
  let videosWithViews = {};

  let videos = await fetch("https://api.npoint.io/8b2edb91816ddeb8905e");

  videos = await videos.json();

  let regExp = /^.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;

  for (let key in videos) {
    let videoId = videos[key][0].match(regExp)[1];

    let youtubeData = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${SECRET_YOUTUBE_API}`
    );

    youtubeData = await youtubeData.json();

    let videoViews = youtubeData.items[0].statistics.viewCount;
    videosWithViews = {
      ...videosWithViews,
      [key]: [...videos[key], videoViews],
    };
  }
  return videosWithViews;
}
