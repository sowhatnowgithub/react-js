export const getTopAnime = async () => {
  const response = await fetch("https://api.jikan.moe/v4/top/anime");
  const data = await response.json();
  console.log(data);
  return data.data;
};
export const searchAnime = async (searchQuery) => {
  const response = await fetch(
    `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(searchQuery)}`,
  );
  const data = await response.json();
  return data.data;
};
export const getTopManga = async () => {
  const response = await fetch(`https://api.jikan.moe/v4/top/manga`);
  const data = await response.json();
  return data.data;
};
export const searchManga = async (searchQuery) => {
  const response = await fetch(
    `https://api.jikan.moe/v4/manga?q=${encodeURIComponent(searchQuery)}`,
  );
  const data = await response.json();
  return data.data;
};
