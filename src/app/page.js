import AnimeList from "@/components/AnimeList";
import Link from "next/link";

const Home = async () => {
  // Fetch top anime
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`
  );
  const anime = await response.json();

  return (
    <div>
      <div className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Popular Anime</h1>
        <Link
          href="/popular"
          className="md:text-xl text-md underline hover:text-indigo-500 transition-all"
        >
          View More
        </Link>
      </div>
      <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
        {anime.data.map((data) => {
          return (
            <div key={data.mal_id} className="shadow-xl text-center">
              <AnimeList
                title={data.title}
                images={data.images.webp.image_url}
                id={data.mal_id}
              ></AnimeList>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
