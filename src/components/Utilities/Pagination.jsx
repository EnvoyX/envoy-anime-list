const Pagination = ({ page, lastPage, setPage }) => {
  const scrollToTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handlePrevPage = () => {
    setPage((prev) => {
      if (prev === 1 || page === 1) {
        return prev;
      }
      scrollToTop();
      return prev - 1;
    });
  };
  const handleNextPage = () => {
    setPage((prev) => {
      if (prev === lastPage || page === lastPage) {
        return prev;
      }
      scrollToTop();
      return prev + 1;
    });
  };

  return (
    <div className="flex justify-center items-center text-color-primary py-6 px-2 gap-4 text-xl ">
      {page <= 1 ? null : (
        <button
          className="px-6 py-2 rounded-lg text-color-dark bg-color-accent hover:text-color-accent hover:bg-color-secondary transition-all"
          onClick={handlePrevPage}
        >
          PREV
        </button>
      )}
      <p>{`${page} of ${lastPage}`}</p>
      {page >= lastPage ? null : (
        <button
          className="px-6 py-2 rounded-lg text-color-dark bg-color-accent hover:text-color-accent hover:bg-color-secondary transition-all"
          onClick={handleNextPage}
        >
          NEXT
        </button>
      )}
    </div>
  );
};

export default Pagination;
