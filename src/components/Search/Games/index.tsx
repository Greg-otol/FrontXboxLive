import { FiSearch } from "react-icons/fi";
import { Search, SearchIcon, SearchInput } from "./style";

interface SearchGame {
  value: string;
  handleSearchValue: (e: any) => void;
}

export const SearchGames = (props: SearchGame) => {
  return (
    <Search>
      <SearchInput
        type="text"
        placeholder=" Pesquisar jogo"
        value={props.value}
        onChange={props.handleSearchValue}
      />
      <SearchIcon>
        <FiSearch />
      </SearchIcon>
    </Search>
  );
};
