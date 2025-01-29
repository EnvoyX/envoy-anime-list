import Link from 'next/link';
import InputSearch from './InputSearch';
import { Input } from 'postcss';

const Navbar = () => {
  return (
    <header className="bg-teal-500">
      <div className="flex md:flex-row flex-col justify-between p-4 gap-2">
        <Link href="/" className="text-2xl text-white font-bold">
          ENVOYANIMELIST
        </Link>
        <InputSearch></InputSearch>
      </div>
    </header>
  );
};

export default Navbar;
