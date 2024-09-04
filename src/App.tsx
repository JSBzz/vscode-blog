import React from "react";
import logo from "./logo.svg";
import "./layout.css";
import { ReactComponent as FilesIcon } from "./icons/files.svg";
import { ReactComponent as SettingIcon } from "./icons/settings-gear.svg";
import { ReactComponent as VscodeIcon } from "./icons/vscode.svg";
import { ReactComponent as SearchIcon } from "./icons/search.svg";
import { ReactComponent as PersonIcon } from "./icons/circle-large.svg";

function App() {
  return (
    <div className="layout">
      <header className="header">
        <VscodeIcon className="vscode-icon" />
        <button className="header-search">
          <SearchIcon className="search-icon" />
          <span>Search</span>
        </button>
      </header>
      <nav className="sidenav">
        <div className="sidenav-block">
          <button className="sidenav-btn">
            <FilesIcon className="account-icon" />
          </button>
          <button className="sidenav-btn">
            <SearchIcon className="account-icon" />
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
      <body className="vscode-body"></body>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
