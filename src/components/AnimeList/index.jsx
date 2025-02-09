import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api, isAnime }) => {
  return (
    <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-4 px-4">
      {/* api.data? => if there's a data, render it. if there isn't wait until data available */}
      {api.data?.map((data, i) => {
        return (
          <div
            className="shadow-xl bg-color-secondary text-center rounded-lg transition duration-300 ease-in-out hover:scale-105 hover:border hover:border-color-primary"
            key={data.mal_id + isAnime ? i : i + 1}
          >
            <Link
              href={`/${isAnime ? "anime" : "manga"}/${data.mal_id}`}
              className=" text-color-primary hover:text-color-accent transition-all"
            >
              <Image
                src={
                  data.images.webp.large_image_url
                    ? data.images.webp.large_image_url
                    : data.images.webp.image_url
                }
                width={350}
                height={350}
                priority={true}
                className="w-full md:max-h-[500px] max-h-60 object-cover rounded-t-lg"
                alt={`${isAnime ? "Anime image" : "Manga image"}`}
              ></Image>
              <h3 className="font-bold md:text-xl text-md p-4">{data.title}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default AnimeList;
