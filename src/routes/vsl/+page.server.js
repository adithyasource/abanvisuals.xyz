export async function load() {
  let videos = await fetch("https://api.npoint.io/0c4d292d0d95dfde6e6e");

  videos = await videos.json();

  return videos;
}
