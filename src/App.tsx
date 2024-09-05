import React, { useState } from "react";
import { SelectMenuContext } from "./context/SelectMenuContext";
import RouteVs from "./router/Routes";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import Footer from "./components/Footer";
import SideNavMenu from "./components/SideNavMenu";

export default function App() {
  const [selectMenu, setSelectMenu] = useState<string | null>(null);
  return (
    <SelectMenuContext.Provider value={{ context: selectMenu, setContext: setSelectMenu }}>
      <div className="layout">
        <Header />
        <SideNav />
        <SideNavMenu />
        <Footer />
        <body className="vscode-body">
          <RouteVs />
        </body>
      </div>
    </SelectMenuContext.Provider>
  );
}
