import { ChangeEvent, FC, memo, useRef } from "react";

import { CrossIcon, SearchIcon } from "src/components/atoms/Icon";
import { debounce } from "src/utils/debounce";
import { getClassName } from "src/utils/getClassName";

import "./Search.scss";

interface SearchProps {
  size?: "small" | "medium";
  defaultValue?: string;
  onSubmit: (value: string) => void;
  onSearch?: (value: string) => void;
}

export const Search: FC<SearchProps> = memo(
  ({ size = "medium", defaultValue, onSearch, onSubmit }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const handleChange = debounce((e: ChangeEvent<HTMLInputElement>) => {
      onSearch?.(e.target.value);
    });

    return (
      <div className={getClassName("search", `search--${size}`)}>
        <form
          id="search-form"
          onSubmit={(e) => {
            e.preventDefault();
            if (inputRef.current?.value) onSubmit(inputRef.current?.value);
          }}
        >
          <SearchIcon />
          <input
            data-testid="search-input"
            ref={inputRef}
            type="text"
            placeholder=" "
            onChange={onSearch ? handleChange : undefined}
            defaultValue={defaultValue}
          />
          <button
            type="button"
            onClick={() => {
              onSearch?.("");
              onSubmit("");
              if (inputRef.current) {
                inputRef.current.value = "";
              }
            }}
          >
            <CrossIcon />
          </button>
        </form>
      </div>
    );
  }
);
