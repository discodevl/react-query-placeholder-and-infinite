import { useState } from "react";
import ReactPaginate from "react-paginate";
import useGetCharactersByPage from "../services/hooks/react-query/useGetCharactersByPage";
import useGetInfoCharacters from "../services/hooks/react-query/useGetInfoCharacters";
import DisplayCharacters from "./DisplayCharacters";

function PlaceholderLoadingComponent() {
  const [page, setPage] = useState(1);
  const { data } = useGetInfoCharacters();
  const { data: dataCharacters, isPlaceholderData } = useGetCharactersByPage({
    page,
  });
  return (
    <>
      <span className="font-bold ">test</span>
      <DisplayCharacters
        characters={dataCharacters?.results}
        isLoading={isPlaceholderData}
      />
      <ReactPaginate
        containerClassName="flex gap-4 items-center"
        nextClassName="border rounded cursor-pointer p-1 flex"
        previousClassName="border rounded cursor-pointer p-1 flex"
        activeClassName="underline cursor-pointer"
        pageClassName="cursor-pointer"
        breakLabel="..."
        nextLabel="next >"
        onPageChange={(p) => setPage(p.selected + 1)}
        pageRangeDisplayed={3}
        pageCount={data?.info?.pages}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default PlaceholderLoadingComponent;
