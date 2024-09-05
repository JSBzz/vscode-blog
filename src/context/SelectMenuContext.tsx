import { createContext } from "react";
type SelectMenuContextType = {
  context: string | null;
  setContext: React.Dispatch<React.SetStateAction<string | null>>;
};

const iSelectedMenuContextState = {
  context: null,
  setContext: () => {},
};

export const SelectMenuContext = createContext<SelectMenuContextType>(iSelectedMenuContextState);
