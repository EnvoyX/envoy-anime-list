import Image from 'next/image';
import Link from 'next/link';

const AnimeList = ({ api, isAnime }) => {
  return (
    <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
      {/* api.data? => if there's a data, render it. if there isn't wait until data available */}
      {api.data?.map((anime, i) => {
        return (
          <div
            className="shadow-xl bg-color-secondary text-center rounded-lg transition duration-300 ease-in-out hover:scale-105 hover:border hover:border-color-primary"
            key={anime.mal_id + isAnime ? i : i + 1}
          >
            <Link
              href={`/${anime.mal_id}`}
              className=" text-color-primary hover:text-color-accent transition-all"
            >
              <Image
                src={anime.images.webp.image_url}
                width={350}
                height={350}
                className="w-full md:max-h-[500px] max-h-60 object-cover rounded-t-lg"
                alt="anime image"
              ></Image>
              <h3 className="font-bold md:text-xl text-md p-4">
                {anime.title}
              </h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default AnimeList;
