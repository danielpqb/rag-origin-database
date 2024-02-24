"use client";

import { createContext, useContext, useState } from "react";

type AppContextStates = {};

const AppContext = createContext({} as AppContextStates);

export const useAppContext = () => {
  return useContext(AppContext);
};

export function AppContextProvider({ children }: { children: React.ReactNode }) {
  const states = {} as AppContextStates;
  return <AppContext.Provider value={states}>{children}</AppContext.Provider>;
}
