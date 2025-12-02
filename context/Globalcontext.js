"use client";

import { getUnreadMessageCount } from "@/app/actions";
import { useSession } from "next-auth/react";
import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext(undefined);

export const useGlobalContext = () => {
  const contextValue = useContext(GlobalContext);

  if (!contextValue) {
    throw new Error("Must wrap component in global provider to get context");
  }
  return contextValue;
};

export const GlobalProvider = ({ children }) => {
  const [unreadCount, setUnreadCount] = useState(0);

  const { data: session } = useSession();

  useEffect(() => {
    async function FetchUnreadCount() {
      if (session && session.user) {
        const count = await getUnreadMessageCount();
        if (count) setUnreadCount(count);
      }
    }
    FetchUnreadCount();
  }, [getUnreadMessageCount, session]);

  return (
    <GlobalContext.Provider value={{ unreadCount, setUnreadCount }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
