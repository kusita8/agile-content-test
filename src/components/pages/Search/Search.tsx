import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { useSearchQuery } from "src/query/useSearchQuery";
import { useSearchQueryParams } from "src/query/useSearchQueryParams";
import { IAnimal } from "src/types/Animal.interface";
import { getClassName } from "src/utils/getClassName";

import { ActiveResult } from "./components/ActiveResult/ActiveResult";
import { EmptySearch } from "./components/EmptySearch";
import { Result } from "./components/Result/Result";
import { Skeleton } from "./components/Skeleton/Skeleton";

import "./Search.scss";

export const Search = () => {
  const [activeAnimal, setActiveAnimal] = useState<IAnimal>();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  const { data, isFetching } = useSearchQuery();

  const searchQuery = useSearchQueryParams((state) => state.params.query);
  const setParams = useSearchQueryParams((state) => state.setParam);

  useEffect(() => {
    setParams("query", query || "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setSearchParams({ query: searchQuery });
    setActiveAnimal(undefined);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const hasData = Boolean(!isFetching && data && data.length > 0);
  const noResults = Boolean(query && !hasData && !isFetching);

  return (
    <div className="search-page">
      <div className="search-page__results">
        {noResults && (
          <p>
            No results found for <b>&lsquo;{query}&rsquo;.</b>
          </p>
        )}
        {hasData &&
          data?.map((animal) => (
            <Result
              key={animal.id}
              onClick={() => setActiveAnimal(animal)}
              {...animal}
            />
          ))}
        {isFetching &&
          [...new Array(10).keys()].map((key) => <Skeleton key={key} />)}
        {Boolean(!query || !hasData) && <EmptySearch />}
      </div>
      <div
        className={getClassName(
          "search-page__active-result",
          activeAnimal && "search-page__active-result--active"
        )}
        onClick={() => setActiveAnimal(undefined)}
      >
        {activeAnimal && <ActiveResult {...activeAnimal} />}
      </div>
    </div>
  );
};
