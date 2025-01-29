import AnimeList from '@/components/AnimeList';
import Header from '@/components/AnimeList/header';

const Home = async () => {
  // Fetch top anime
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`
  );
  const topAnime = await response.json();

  return (
    <>
      {/* Popular Anime */}
      <section>
        <Header
          title={`Popular Animes`}
          linkHref={`/popular`}
          linkTitle={`View More`}
        ></Header>
        <AnimeList api={topAnime}></AnimeList>
      </section>
      {/* Recent Animes */}
      <section>
        <Header
          title={`Recent Animes`}
          linkHref={`/new`}
          linkTitle={`See More`}
        ></Header>
        <AnimeList api={topAnime}></AnimeList>
      </section>
    </>
  );
};

export default Home;
