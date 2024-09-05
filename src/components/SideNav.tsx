import { ReactComponent as FilesIcon } from "../icons/files.svg";
import { ReactComponent as SettingIcon } from "../icons/settings-gear.svg";
import { ReactComponent as PersonIcon } from "../icons/circle-large.svg";
import { ReactComponent as SearchIcon } from "../icons/search.svg";
import { useContext } from "react";
import { SelectMenuContext } from "../context/SelectMenuContext";

export default function SideNav() {
  const { context, setContext } = useContext(SelectMenuContext);
  const menuClickHandler = (menu: string) => {
    setContext(menu);
  };
  return (
    <nav className="sidenav">
      <div className="sidenav-block">
        <button
          className={`sidenav-btn sidenav-btn${context == "file" ? "-selected" : ""}`}
          onClick={() => menuClickHandler("file")}
        >
          <FilesIcon
            className={`account-icon account-icon${context == "file" ? "-selected" : ""}`}
          />
        </button>
        <button
          className={`sidenav-btn sidenav-btn${context == "search" ? "-selected" : ""} `}
          onClick={() => menuClickHandler("search")}
        >
          <SearchIcon
            className={`account-icon account-icon${context == "search" ? "-selected" : ""}`}
          />
        </button>
      </div>
      <div className="sidenav-block ">
        <button className="sidenav-btn">
          <PersonIcon className="account-icon" />
        </button>
        <button className="sidenav-btn">
          <SettingIcon className="account-icon" />
        </button>
      </div>
    </nav>
  );
}
