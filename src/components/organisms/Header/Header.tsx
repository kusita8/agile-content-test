import { useLocation } from "react-router-dom";

import { MenuIcon } from "src/components/atoms/Icon";
import { SearchHeader } from "src/components/organisms/SearchHeader/SearchHeader";
import { Path } from "src/routes/Path";

import "./Header.scss";

export const Header = () => {
  const { pathname } = useLocation();
  const isSearch = pathname === Path.SEARCH;

  return (
    <div className="header">
      {isSearch ? (
        <SearchHeader />
      ) : (
        <p>
          <b>Agile content</b> Frontend test
        </p>
      )}
      <div className="header__right">
        <MenuIcon />
        <div className="header__user">
          <img
            src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2231&q=80"
            alt="Profile image"
          />
        </div>
      </div>
    </div>
  );
};
