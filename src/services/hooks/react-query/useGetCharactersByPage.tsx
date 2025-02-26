import { useQuery } from "@tanstack/react-query";
import { getCharactersByPage } from "../../api";

type Props = {
  page: number;
};

function useGetCharactersByPage({ page }: Props) {
  return useQuery({
    queryKey: ["caracters", { page }],
    queryFn: () => getCharactersByPage(page),
    placeholderData: (prev) => prev,
  });
}

export default useGetCharactersByPage;
