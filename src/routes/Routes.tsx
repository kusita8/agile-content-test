import { useEffect } from "react";
import { Route, Routes as Switch, useLocation } from "react-router-dom";

import { Home } from "src/components/pages/Home/Home";
import { Search } from "src/components/pages/Search/Search";

import { Path } from "./Path";

export const Routes = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Switch>
      <Route path={Path.HOME} element={<Home />} />
      <Route path={Path.SEARCH} element={<Search />} />
    </Switch>
  );
};
