const Pagination = ({ page, lastPage, setPage }) => {
  const scrollToTop = () => {
    scrollTo({
      behavior: 'smooth',
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
    <div className="flex justify-center text-color-primary py-6 px-2 gap-4 text-xl ">
      {page <= 1 ? null : (
        <button
          className="transition-all hover:text-color-accent"
          onClick={handlePrevPage}
        >
          PREV
        </button>
      )}
      <p>{`${page} of ${lastPage}`}</p>
      {page >= lastPage ? null : (
        <button
          className="transition-all hover:text-color-accent"
          onClick={handleNextPage}
        >
          NEXT
        </button>
      )}
    </div>
  );
};

export default Pagination;
