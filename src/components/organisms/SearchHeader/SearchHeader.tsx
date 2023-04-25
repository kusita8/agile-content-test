import { useCallback } from "react";
import { Link } from "react-router-dom";

import { Search } from "src/components/molecules/Search/Search";
import { useSearchQueryParams } from "src/query/useSearchQueryParams";
import { Path } from "src/routes/Path";

import "./SearchHeader.scss";

import googleLogo from "/src/assets/google-logo.png";

export const SearchHeader = () => {
  const setParam = useSearchQueryParams((state) => state.setParam);
  const searchQuery = useSearchQueryParams((state) => state.params.query);

  const handleSubmit = useCallback((value: string) => {
    setParam("query", value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="searchheader">
      <Link className="searchheader__logo" to={Path.HOME}>
        <img src={googleLogo} alt="Google logo" />
      </Link>
      <div className="searchheader__search-container">
        <Search
          key={searchQuery}
          defaultValue={searchQuery}
          size="small"
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};
