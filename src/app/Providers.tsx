"use client";

import React, { createContext, useContext, useState } from "react";

const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [homeAnimate, setHomeAnimate] = useState<boolean>(true);
  return (
    <AppContext.Provider value={{ homeAnimate, setHomeAnimate }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
