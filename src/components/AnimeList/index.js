import Image from 'next/image';
import Link from 'next/link';

const AnimeList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
      {api.data.map((anime) => {
        return (
          <div className="shadow-xl text-center rounded-lg" key={anime.mal_id}>
            <Link href={`/${anime.mal_id}`}>
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
