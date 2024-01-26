import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchCountiresWithCountBases } from "./api";

export function useCountries() {
  return useQuery({
    queryKey: ["countries"],
    queryFn: fetchCountiresWithCountBases,
    placeholderData: keepPreviousData,
  });
}
