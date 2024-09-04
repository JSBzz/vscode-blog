import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./css/layout.css";
import { ReactComponent as FilesIcon } from "./icons/files.svg";
import { ReactComponent as SettingIcon } from "./icons/settings-gear.svg";
import { ReactComponent as VscodeIcon } from "./icons/vscode.svg";
import { ReactComponent as SearchIcon } from "./icons/search.svg";
import { ReactComponent as PersonIcon } from "./icons/circle-large.svg";

import reportWebVitals from "./reportWebVitals";
import Main from "./Main";

const GlobalStyle = createGlobalStyle`
  ${reset}`;

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
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
    <React.StrictMode>
      <GlobalStyle />
      <body className="vscode-body">
        <Main />
      </body>
    </React.StrictMode>
    <footer className="footer"></footer>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
