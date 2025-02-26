import { useInfiniteQuery } from "@tanstack/react-query";
import { getCharactersByPage } from "../../api";

function useGetCharactersInfinite() {
  return useInfiniteQuery({
    queryKey: ["characters-inf"],
    queryFn: ({ pageParam }) => getCharactersByPage(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.info.next) {
        return lastPage.info.next.split("page=")[1];
      }
      return undefined;
    },
  });
}

export default useGetCharactersInfinite;
