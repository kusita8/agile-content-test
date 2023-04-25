import { useCallback, useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

import { Button } from "src/components/atoms/Button/Button";
import { Search } from "src/components/molecules/Search/Search";
import { Path } from "src/routes/Path";

import "./Home.scss";

import googleLogo from "/src/assets/google-logo.png";

export const Home = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = useCallback((value: string) => {
    if (!value) return;
    navigate({
      pathname: Path.SEARCH,
      search: createSearchParams({ query: value }).toString(),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="home">
      <div className="home__inner">
        <div className="home__logo">
          <img src={googleLogo} alt="Google logo" />
        </div>
        <Search onSearch={setSearch} onSubmit={handleSubmit} />
        <Button disabled={!search} type="submit" form="search-form">
          Buscar
        </Button>
      </div>
    </div>
  );
};
