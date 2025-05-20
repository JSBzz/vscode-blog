import React, { useState } from "react";
import { SelectMenuContext } from "./context/SelectMenuContext";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import styled, { createGlobalStyle } from "styled-components";
import Footer from "./components/Footer";

export default function App() {
  const [selectMenu, setSelectMenu] = useState<string | null>(null);
  return (
    <SelectMenuContext.Provider value={{ context: selectMenu, setContext: setSelectMenu }}>
      <GlobalStyle />
      {/* <div className="layout"> */}
        {/* <Header /> */}
        {/* <SideNavMenu /> */}
        {/* <Footer /> */}
        {/* <body className="vscode-body"> */}
          {/* <RouteVs /> */}
        {/* </body> */}
      {/* </div> */}
      <Layout>
      <SideNav />
      {/* <Footer /> */}
      </Layout>

    </SelectMenuContext.Provider>
  );
}

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
    padding: 0;
    height: 100%;
    color: #9b9898; 
    font-size: 11px;
    font-weight: 500;
    font-family: "Segoe";
    overflow-y: hidden;
    background-color: transparent;
  }
`;

const Layout = styled.html`
  background-color: transparent;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
`