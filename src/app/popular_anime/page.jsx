'use client';
import { useEffect, useState } from 'react';
import HeaderMenu from '@/components/Utilities/HeaderMenu';
import Pagination from '@/components/Utilities/Pagination';
import AnimeList from '@/components/AnimeList';
import { getAnimeResponse } from '../libs/api-libs';

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);
  const fetchData = async () => {
    const popularAnime = await getAnimeResponse('top/anime', `page=${page}`);
    setTopAnime(popularAnime);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <HeaderMenu title={`POPULAR ANIME #${page}`}></HeaderMenu>
      <AnimeList api={topAnime} isAnime={'anime'}></AnimeList>
      <Pagination
        page={page}
        lastPage={topAnime.pagination?.last_visible_page}
        setPage={setPage}
      ></Pagination>
    </>
  );
};

export default Page;
