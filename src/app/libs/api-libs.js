export const getAnimeResponse = async (resource, query) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
  );
  const animes = await response.json();
  console.log(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`);
  return animes;
};

export const getMangaResponse = async (resource, query) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
  );
  const mangas = await response.json();
  console.log(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`);
  return mangas;
};

export const getVideoAnime = async (resource, query) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
  );
  const videos = await response.json();
  console.log(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`);
  return videos;
};

export const getPhotoAnime = async (resource, query) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
  );
  const images = await response.json();
  console.log(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`);
  return images;
};

export const getCharactersAnime = async (resource, query) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
  );
  const characters = await response.json();
  console.log(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`);
  return characters;
};
