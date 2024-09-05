import { ReactComponent as VscodeIcon } from "../icons/vscode.svg";
import { ReactComponent as SearchIcon } from "../icons/search.svg";
export default function Header() {
  return (
    <header className="header">
      <VscodeIcon className="vscode-icon" />
      <button className="header-search">
        <SearchIcon className="search-icon" />
        <span>Search</span>
      </button>
    </header>
  );
}
