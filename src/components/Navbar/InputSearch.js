import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr';

`use client`;

const InputSearch = () => {
  return (
    <div className="relative">
      <input
        placeholder="Search Anime...."
        className="w-full p-2 rounded"
      ></input>
      <button className="absolute top-2 end-2">
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
