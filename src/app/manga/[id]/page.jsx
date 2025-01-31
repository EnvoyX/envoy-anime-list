import { getMangaResponse } from "@/libs/api-libs";
import Image from "next/image";

const Page = async ({ params: { id } }) => {
  const manga = await getMangaResponse(`manga/${id}`, "");
  return (
    <>
      <div className="pt-4 px-4">
        <h3 className="text-2xl text-color-primary font-bold">
          {manga.data.title} / {manga.data.title_english} -{" "}
          {manga.data.published.prop.from.year}
        </h3>
      </div>
      <div className="p-4 flex gap-2 text-neutral-100 overflow-x-auto">
        <div className="bg-color-secondary w-36 p-2 flex flex-col justify-center items-center rounded border border-color-accent text-center">
          <h3>STATUS</h3>
          <p>{manga.data.status}</p>
        </div>
        <div className="bg-color-secondary w-36 p-2 flex flex-col justify-center items-center rounded border border-color-accent text-center">
          <h3>SCORE</h3>
          <h4 className="font-bold">{manga.data.score}/10</h4>
          <p>{manga.data.scored_by} users</p>
        </div>
        <div className="bg-color-secondary w-36 p-2 flex flex-col justify-center items-center rounded border border-color-accent text-center">
          <h3>RANK</h3>
          <p>#{manga.data.rank}</p>
        </div>
        <div className="bg-color-secondary w-36 p-2 flex flex-col justify-center items-center rounded border border-color-accent text-center">
          <h3>POPULARITY</h3>
          <p>#{manga.data.popularity}</p>
        </div>
        <div className="bg-color-secondary w-36 p-2 flex flex-col justify-center items-center rounded border border-color-accent text-center">
          <h3>AUTHOR</h3>
          <p>{manga.data.authors[0].name}</p>
        </div>
      </div>
      <div className="p-4 m-4 bg-color-secondary rounded-lg flex sm:flex-nowrap flex-wrap gap-2 text-color-primary ">
        {/* Image */}
        <Image
          src={manga.data.images.webp.image_url}
          alt={manga.data.images.jpg.image_url}
          width={250}
          height={250}
          className="w-full rounded-lg object-cover"
        ></Image>
        {/* Synposis & Genre */}
        <div className="flex flex-col md:justify-between gap-6 p-2">
          <p className="text-justify text-md">{manga.data.synopsis}</p>
          <div className="bg-color-dark p-2 flex flex-col justify-center items-center rounded border border-color-accent">
            <h3 className="font-bold">Genre</h3>
            <div className="flex gap-4 flex-wrap justify-center">
              {manga.data.genres.map((genre) => {
                return <p key={genre.name}>{genre.name}</p>;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
