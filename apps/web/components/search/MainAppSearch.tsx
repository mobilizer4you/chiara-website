import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import { useRouter } from "next/router";
import React from "react";
import SearchIcon from "../../../web/public/images/icon-search.svg";
import { ROUTES } from "../../utils/utils";

const MainAppSearch = () => {
  const router = useRouter();
  const [searchItem, setSearchItem] = React.useState("");
  const [timerId, setTimerId] = React.useState<null | NodeJS.Timeout>(null);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    if (timerId != null) {
      clearTimeout(timerId);
    }
    setSearchItem(value);
    const id = setTimeout(() => value, 400);
    setTimerId(id);
  };

  const handleSelect = (value: string) => {
    router.push(
      {
        pathname: ROUTES.APP_SEARCH,
        query: {
          query: value,
        },
      },
      undefined,
      { shallow: true }
    );
  };
  return (
    <Combobox onSelect={handleSelect}>
      <div className="search-ticker-box">
        <SearchIcon></SearchIcon>
        <ComboboxInput
          type="text"
          placeholder="Enter a ticker symbol or choose on from dropdown"
          id="search"
          value={searchItem}
          onChange={handleChange}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="none"
          spellCheck="false"
          aria-label="search products"
          autoFocus
        />
      </div>
      <ComboboxPopover className="search__popover" portal={false}>
        <ComboboxList className="search__list">
          <ComboboxOption className="search__item" value="Apple" />
          <ComboboxOption className="search__item" value="Banana" />
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};

export default MainAppSearch;
