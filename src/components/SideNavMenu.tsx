import { useContext } from "react";
import { SelectMenuContext } from "../context/SelectMenuContext";
import SideNavMenuFiles from "./SideNavMenuFiles";

export default function SideNavMenu() {
  const { context, setContext } = useContext(SelectMenuContext);
  return (
    <div className="sidenav-menu">
      <SideNavMenuFiles />
    </div>
  );
}
