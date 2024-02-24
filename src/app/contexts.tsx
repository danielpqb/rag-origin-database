"use client";

import { AppContextProvider } from "@/contexts/AppContext";

export function ProvideContexts({ children }: { children: React.ReactNode }) {
  return <AppContextProvider>{children}</AppContextProvider>;
}
