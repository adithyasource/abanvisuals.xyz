export async function load() {
  let data = await fetch("https://api.npoint.io/2ab65d1373696dc7d9d0");

  data = await data.json();

  return data;
}
