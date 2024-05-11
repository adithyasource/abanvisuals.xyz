
import { SECRET_YOUTUBE_API } from "$env/static/private";

let isLoading = true
let videos

let videosWithViews = {}



// https://api.npoint.io/7d15dcc6d912342c2681
// https://api.npoint.io/18b19d10e2ff5329e5b5
await fetch("https://api.npoint.io/7d15dcc6d912342c2681").then(async (response) => {
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

console.log(videosWithViews)


export const load = async () => {
  return videosWithViews 
}
