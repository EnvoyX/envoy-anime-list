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
