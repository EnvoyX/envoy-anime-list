"use client";
import { useEffect, useState } from "react";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import AnimeList from "@/components/AnimeList";
import { getMangaResponse } from "@/libs/api-libs";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topManga, setTopManga] = useState([]);
  const fetchData = async () => {
    const popularManga = await getMangaResponse("top/manga", `page=${page}`);
    setTopManga(popularManga);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <HeaderMenu title={`POPULAR MANGA #${page}`}></HeaderMenu>
      <AnimeList api={topManga}></AnimeList>
      <Pagination
        page={page}
        lastPage={topManga.pagination?.last_visible_page}
        setPage={setPage}
      ></Pagination>
    </>
  );
};

export default Page;
