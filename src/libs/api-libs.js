export const getAnimeResponse = async (resource, query) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
  );
  const animes = await response.json();
  // console.log(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`);
  return animes;
};
export const getNestedAnimeResponse = async (resource, objectProperty) => {
  const response = await getAnimeResponse(resource);
  return response.data?.flatMap((item) => item[objectProperty]);
};

export const getGeneratedRecommendationAnime = (data, gap) => {
  const firstNum = ~~(Math.random() * (data?.length - gap) + 1);
  const lastNum = firstNum + gap;

  // Assign data property with value of recommendedAnimes
  // to fetch the data since it's response is already in entry
  // and components that does the mapping require data property
  const response = {
    data: data?.slice(firstNum, lastNum),
  };
  return response;
};

export const getMangaResponse = async (resource, query) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
  );
  const mangas = await response.json();
  return mangas;
};

export const getNestedMangaResponse = async (resource, objectProperty) => {
  const response = await getMangaResponse(resource);
  return response.data?.flatMap((item) => item[objectProperty]);
};

export const getGeneratedRecommendationManga = (data, gap) => {
  const firstNum = ~~(Math.random() * (data?.length - gap) + 1);
  const lastNum = firstNum + gap;

  // Assign data property with value of recommendedAnimes
  // to fetch the data since it's response is already in entry
  // and components that does the mapping require data property
  const response = {
    data: data?.slice(firstNum, lastNum),
  };
  return response;
};
