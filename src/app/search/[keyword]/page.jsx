// Page ini disimpan dalam folder seperti src/app/search/[keyword]/page.js
// Supaya keyword ini didapat berdasarkan dynamic data yang ada di url (kosep folder routing)
import AnimeList from "../../../components/AnimeList/";
import Header from "../../../components/AnimeList/Header";
import { getAnimeResponse, getMangaResponse } from "@/libs/api-libs";

const Page = async ({ params }) => {
  // Fetch search anime
  // const keyword = params.keyword;
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword); // to remove/decode %20 (space in URL)
  const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`);
  const searchManga = await getMangaResponse(`manga`, `q=${decodedKeyword}`);

  return (
    <>
      {/* Search Anime */}
      <section>
        <Header title={`Search result for anime: "${decodedKeyword}"`}></Header>
        <AnimeList api={searchAnime} isAnime={"anime"}></AnimeList>
      </section>

      {/* Search Manga */}
      <section className="mt-16">
        <Header title={`Search result for manga: "${decodedKeyword}"`}></Header>
        <AnimeList api={searchManga}></AnimeList>
      </section>
    </>
  );
};

export default Page;
