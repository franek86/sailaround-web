import { keepPreviousData, useQuery } from "@tanstack/react-query";

import { fetchCountiresWithCountBases } from "./api";

export function useCountries(params) {
  return useQuery({
    queryKey: ["countries", params],
    queryFn: () => fetchCountiresWithCountBases(params),
    placeholderData: keepPreviousData,
  });
}
