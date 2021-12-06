import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function DataWrapper({ children }) {
  const [currentComponent, setCurrentComponent] = useState("adminIndex");
  let sharedState = {
    currentComponent,
    setCurrentComponent,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useSharedData() {
  return useContext(AppContext);
}
