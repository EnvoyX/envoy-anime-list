import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ title, images, id }) => {
  return (
    <Link href={`/${id}`}>
      <Image
        src={images}
        width={350}
        height={350}
        className="w-full md:max-h-96 max-h-64 object-cover"
        alt="anime image"
      ></Image>
      <h3 className="font-bold md:text-xl text-md p-4">{title}</h3>
    </Link>
  );
};

export default AnimeList;
