// Page ini disimpan dalam folder seperti src/app/search/[keyword]/page.js
// Supaya keyword ini didapat berdasarkan dynamic data yang ada di url (kosep folder routing)
import AnimeList from '@/components/AnimeList';
import Header from '@/components/AnimeList/header';

const Page = async ({ params }) => {
  // Fetch search anime
  // const keyword = params.keyword;
  const { keyword } = params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`
  );
  const searchAnime = await response.json();

  return (
    <>
      {/* Search Anime */}
      <section>
        <Header title={`Search result for: "${keyword}"`}></Header>
        <AnimeList api={searchAnime}></AnimeList>
      </section>
    </>
  );
};

export default Page;
