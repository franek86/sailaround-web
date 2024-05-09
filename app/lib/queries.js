import { keepPreviousData, useQuery } from "@tanstack/react-query";

import { fetchCountiresWithCountBases, fetchAllCountries } from "./api";

export function useCountriesWithBases(params) {
  return useQuery({
    queryKey: ["countries", params],
    queryFn: () => fetchCountiresWithCountBases(params),
    placeholderData: keepPreviousData,
  });
}

export function useCountries(){
  return useQuery({
    queryKey:["allCountries"],
    queryFn: () => fetchAllCountries()
  })
}
