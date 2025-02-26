import { useQuery } from '@tanstack/react-query'
import { getInfoApi } from '../../api'

function useGetInfoCharacters() {
  return useQuery({queryKey:["characters-info"], queryFn: getInfoApi})
}

export default useGetInfoCharacters