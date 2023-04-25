import { useQuery } from "@tanstack/react-query";

import { getAnimals } from "src/service/Animals";

import { useSearchQueryParams } from "./useSearchQueryParams";

export const useSearchQuery = () => {
  const params = useSearchQueryParams((state) => state.params);

  return useQuery(["search-query", params], () => getAnimals(params), {
    enabled: Object.keys(params).length > 0,
  });
};
