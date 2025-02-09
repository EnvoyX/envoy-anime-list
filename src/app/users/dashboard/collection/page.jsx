import Image from "next/image";
import Link from "next/link";
import HeaderCollection from "@/components/Dashboard/HeaderCollection";
import prisma from "@/libs/prisma";
import { authUserSession } from "@/libs/auth-libs";
import { getAnimeResponse } from "@/libs/api-libs";
import { Placeholder } from "@phosphor-icons/react";

export default async function Collection() {
  const user = await authUserSession();
  const collectionsAnime = await prisma.collection.findMany({
    where: { user_email: user?.email, isAnime: true },
  });
  const collectionsManga = await prisma.collection.findMany({
    where: { user_email: user?.email, isAnime: false },
  });
  console.log(collectionsAnime);
  console.log(collectionsManga);

  return (
    <section className="mt-2 p-6 w-full">
      <HeaderCollection title={"My Collections"}></HeaderCollection>
      <div className="flex flex-col mt-10">
        <div className="px-3 py-2 bg-color-secondary text-color-accent self-start rounded-lg">
          <h1 className="text-3xl">Anime</h1>
        </div>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4 mt-4">
          {collectionsAnime.map((collection, index) => {
            return (
              <Link
                key={index}
                href={`/anime/${collection.mal_id}`}
                className="relative border-2 border-color-accent rounded-lg hover:scale-105 transition-all"
              >
                <Image
                  src={collection.item_image}
                  alt={`Image of ${collection.item_title}`}
                  width={350}
                  height={350}
                  className="w-full rounded-lg"
                />
                <div className="absolute bottom-0 h-16 bg-color-accent flex justify-center items-center w-full rounded-b-lg">
                  <h5 className="text-color-primary text-center">
                    {collection.item_title}
                  </h5>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col mt-10">
        <div className="px-3 py-2 bg-color-secondary text-color-accent self-start rounded-lg">
          <h1 className="text-3xl">Manga</h1>
        </div>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4 mt-4">
          {collectionsManga.map((collection, index) => {
            return (
              <Link
                key={index}
                href={`/anime/${collection.mal_id}`}
                className="relative border-2 border-color-accent rounded-lg hover:scale-105 transition-all"
              >
                <Image
                  src={collection.item_image}
                  alt={`Image of ${collection.item_title}`}
                  width={350}
                  height={350}
                  className="w-full rounded-lg"
                />
                <div className="absolute bottom-0 h-16 bg-color-accent flex justify-center items-center w-full rounded-b-lg">
                  <h5 className="text-color-primary text-center">
                    {collection.item_title}
                  </h5>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
