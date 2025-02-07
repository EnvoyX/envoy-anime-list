import { getAnimeResponse } from "@/libs/api-libs";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";
import Link from "next/link";
import CollectionButton from "@/components/AnimeList/CollectionButton";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`, "");
  const user = await authUserSession();
  const photos = await getAnimeResponse(`anime/${id}/pictures`, "");
  const videos = await getAnimeResponse(`anime/${id}/videos`, "");
  const collection = await prisma.collection.findFirst({
    where: { user_email: user?.email, mal_id: id },
  });
  return (
    <>
      <div className="pt-4 px-4">
        <h3 className="text-2xl text-color-primary font-bold">
          {anime.data.title} / {anime.data.title_english} - {anime.data.year}
        </h3>
        {!collection && user && (
          <CollectionButton
            mal_id={id}
            user_email={user?.email}
            item_image={anime.data.images.webp.image_url}
            item_title={anime.data.title}
          />
        )}
        {collection && user && (
          <p className="text-lg text-color-dark rounded-lg px-2 py-1 bg-color-primary max-w-52 text-center">
            Saved in collection
          </p>
        )}
      </div>
      <div className="p-4 flex gap-2 text-neutral-100 overflow-x-auto">
        <div className="bg-color-secondary w-36 p-2 flex flex-col justify-center items-center rounded border border-color-accent text-center">
          <h3>SCORE</h3>
          <h4 className="font-bold">{anime.data.score}/10</h4>
          <p>{anime.data.scored_by} users</p>
        </div>
        <div className="bg-color-secondary w-36 p-2 flex flex-col justify-center items-center rounded border border-color-accent text-center">
          <h3>RANK</h3>
          <p>#{anime.data.rank}</p>
        </div>
        <div className="bg-color-secondary w-36 p-2 flex flex-col justify-center items-center rounded border border-color-accent text-center">
          <h3>POPULARITY</h3>
          <p>#{anime.data.popularity}</p>
        </div>
        <div className="bg-color-secondary w-36 p-2 flex flex-col justify-center items-center rounded border border-color-accent text-center">
          <h3>EPISODES</h3>
          <p>{anime.data.episodes}</p>
        </div>
        <div className="bg-color-secondary w-36 p-2 flex flex-col justify-center items-center rounded border border-color-accent text-center">
          <h3>STATUS</h3>
          <p>{anime.data.status}</p>
        </div>
      </div>
      <div className="p-4 m-4 bg-color-secondary rounded-lg flex sm:flex-nowrap flex-wrap gap-2 text-color-primary ">
        {/* Image */}
        <Image
          src={anime.data.images.webp.image_url}
          alt={anime.data.images.jpg.image_url}
          width={250}
          height={250}
          className="w-full rounded-lg object-cover"
        ></Image>
        {/* Synposis & Genre */}
        <div className="flex flex-col md:justify-between gap-6 p-2">
          <p className="text-justify text-md">{anime.data.synopsis}</p>
          <div className="bg-color-dark p-2 flex flex-col justify-center items-center rounded border border-color-accent">
            <h3 className="font-bold">Genre</h3>
            <div className="flex gap-4">
              {anime.data.genres.map((genre) => {
                return <p key={genre.name}>{genre.name}</p>;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 justify-center items-center mx-auto">
        <div className="p-4 bg-color-secondary text-color-primary rounded-lg">
          <h3 className="p-2 mb-2">Photos</h3>
          <div className="p-4 grid lg:grid-cols-6 md:grid-cols-4 grid-cols-1 gap-4 ">
            {photos.data?.map((photo, i) => {
              return (
                <Link
                  href={
                    photo.jpg.large_image_url
                      ? photo.jpg.large_image_url
                      : photo.jpg.image_url
                  }
                  key={i}
                  className="transition duration-300 ease-in-out hover:scale-105 hover:border hover:rounded-lg hover:border-color-accent"
                >
                  <Image
                    src={
                      photo.webp.large_image_url
                        ? photo.webp.large_image_url
                        : photo.webp.image_url
                    }
                    alt={
                      photo.jpg.large_image_url
                        ? photo.jpg.large_image_url
                        : photo.jpg.image_url
                    }
                    width={250}
                    height={250}
                    className="w-full rounded-lg object-cover"
                  ></Image>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="p-4 text-color-primary mx-auto">
        <div className="p-4 bg-color-secondary rounded-lg">
          <h3 className="p-2 mb-2">Trailers</h3>
          <div className="p-0 md:p-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
            {videos.data?.promo.map((video, i) => {
              return (
                <div key={i}>
                  <VideoPlayer
                    youtubeId={video.trailer.youtube_id}
                    height={320}
                    width={180}
                  ></VideoPlayer>
                  <h1>{video.title}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
