import useGetCharactersInfinite from "../services/hooks/react-query/useGetCharactersInfinite";
import { useInView } from "react-intersection-observer";
import DisplayCharacter from "./DisplayCharacter";
import { useEffect } from "react";
import { Character } from "../utils/types";

function InfiniteScrollComponent() {
  const { data, fetchNextPage, hasNextPage } = useGetCharactersInfinite();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <div>
      {data?.pages.map((page, i) => (
        <div key={i} className="flex flex-col gap-2">
          {page.results.map((character: Character, i: number) => (
            <DisplayCharacter key={i} char={character} isLoading={false} />
          ))}
        </div>
      ))}
      {hasNextPage ? <div ref={ref} /> : null}
    </div>
  );
}

export default InfiniteScrollComponent;
