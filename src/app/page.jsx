import AnimeList from '@/components/AnimeList';
import Header from '@/components/AnimeList/header';
import { getAnimeResponse, getMangaResponse } from './libs/api-libs';

const Page = async () => {
  // Fetch top anime
  const topAnime = await getAnimeResponse('top/anime', 'limit=10');
  const topManga = await getMangaResponse('top/manga', 'limit=10');
  console.log(topAnime);

  return (
    <>
      {/* Popular Anime */}
      <section>
        <Header
          title={`Popular Animes`}
          linkHref={`/popular_anime`}
          linkTitle={`View More`}
        ></Header>
        <AnimeList api={topAnime} isAnime={'anime'}></AnimeList>
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
    </>
  );
};

export default Page;
