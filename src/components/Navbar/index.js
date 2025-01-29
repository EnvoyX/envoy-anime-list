import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-teal-500">
      <div className="flex md:flex-row flex-col justify-between p-4 gap-2">
        <Link href="/" className="text-2xl text-white font-bold">
          ENVOYANIMELIST
        </Link>
        <input placeholder="Search Anime...." className=""></input>
      </div>
    </header>
  );
};

export default Navbar;
