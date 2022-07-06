import React from "react";
import usePageStore from "../../store/PageStore";
import useGetBookStore from "../../store/GetBookStore";
import { ApiService } from "../../api/index.service";
import { useQuery } from "react-query";


function BookPagination() {
  const page = usePageStore((state) => state.pages);
  const next = usePageStore((state) => state.next);
  const previous = usePageStore((state) => state.previous);
  const filter = useGetBookStore((state) => state.filter);
  const sort = useGetBookStore((state) => state.sort);
  const { isLoading, isError, data, isFetching, isPreviousData } = useQuery(
    ["fetchBook", page, filter, sort],
    async () => {
      return await ApiService.publics.getBook({filter, sort, page});
    },
    { keepPreviousData: true }
  );

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: error </div>
      ) : (
        <div>
          <ul>
            {data?.data.data.items.map((data: any) => (
              <li key={data.id}> {data.title}</li>
            ))}
          </ul>
        </div>
      )}
      <span>Current Page: {page}</span>
      <button onClick={previous} disabled={page === 1}>
        Previous Page
      </button>{" "}
      <button
        onClick={next}
        disabled={isPreviousData || page === data?.data.data.pagination.totalPages}
      >
        Next Page
      </button>
      {isFetching ? <span> Loading...</span> : null}
    </div>
  );
}

export default BookPagination;
