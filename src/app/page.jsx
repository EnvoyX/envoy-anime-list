import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import {
  getAnimeResponse,
  getGeneratedRecommendationAnime,
  getMangaResponse,
  getNestedAnimeResponse,
  getGeneratedRecommendationManga,
  getNestedMangaResponse,
} from "@/libs/api-libs";

const Page = async () => {
  // Fetch top anime & manga
  const topAnime = await getAnimeResponse("top/anime", "limit=12");
  const topManga = await getMangaResponse("top/manga", "limit=12");

  // Fetch recent recommended anime & manga
  let recommendedAnimes = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  recommendedAnimes = getGeneratedRecommendationAnime(recommendedAnimes, 12);

  let recommendedManga = await getNestedMangaResponse(
    "recommendations/manga",
    "entry"
  );
  recommendedManga = getGeneratedRecommendationManga(recommendedManga, 12);

  return (
    <>
      {/* Popular Anime */}
      <section>
        <Header
          title={`Popular Animes`}
          linkHref={`/popular_anime`}
          linkTitle={`View More`}
        ></Header>
        <AnimeList api={topAnime} isAnime={"anime"}></AnimeList>
      </section>
      {/* Recommended Anime */}
      <section className="mt-16">
        <Header title={`Recommended Anime`}></Header>
        <AnimeList api={recommendedAnimes} isAnime={"anime"}></AnimeList>
      </section>
      {/* Popular Manga */}
      <section className="mt-16">
        <Header
          title={`Popular Manga`}
          linkHref={`/popular_manga`}
          linkTitle={`See More`}
        ></Header>
        <AnimeList api={topManga}></AnimeList>
      </section>
      {/* Recommended Manga */}
      <section className="mt-16">
        <Header title={`Recommended Manga`}></Header>
        <AnimeList api={recommendedManga}></AnimeList>
      </section>
    </>
  );
};

export default Page;
