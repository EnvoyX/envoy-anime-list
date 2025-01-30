'use client';
import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();
  const handleSearch = (event) => {
    const keyword = searchRef.current.value;

    if (!keyword || keyword.trim() === '') return;

    if (event.key === 'Enter' || event.type === 'click') {
      event.preventDefault();
      router.push(`/search/${keyword}`);
    }
  };
  return (
    <div className="relative">
      <input
        placeholder="Search Anime...."
        className="w-full p-2 rounded"
        ref={searchRef}
        onKeyDown={handleSearch} // onKeyDown untuk mendeteksi input keyboard dari user
        // onChange={(event) => setInputSeach(event.target.value)}
      ></input>
      <button className="absolute top-2 end-2" onClick={handleSearch}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
