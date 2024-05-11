import { SECRET_YOUTUBE_API } from "$env/static/private";

let isLoading = true
let videos

let videosWithViews = {}

export async function load() {
  await fetch("https://api.npoint.io/8b2edb91816ddeb8905e").then(async (response) => {
    response.json().then(async (data) => {
      videos = data;

      let regExp = /^.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;


      for (let key in videos) {
        let videoId = videos[key][0].match(regExp)[1]


        await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${SECRET_YOUTUBE_API}`
        ).then((response) => {
          response.json().then((data) => {
            let videoViews = data.items[0].statistics.viewCount
            videosWithViews = {...videosWithViews , [key]: [...videos[key], videoViews]}
          });
        });
      }
    });
  });
  return videosWithViews
}
