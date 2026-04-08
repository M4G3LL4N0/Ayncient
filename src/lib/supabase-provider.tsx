"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";
import { createBrowserSupabaseClient } from "./supabase/client";

type SupabaseClientType = ReturnType<typeof createBrowserSupabaseClient>;

type SupabaseContextValue = {
  supabase: SupabaseClientType;
};

const SupabaseContext = createContext<SupabaseContextValue>({ supabase: null });

export function SupabaseProvider({ children }: { children: ReactNode }) {
  const supabase = useMemo(() => createBrowserSupabaseClient(), []);

  return (
    <SupabaseContext.Provider value={{ supabase }}>
      {children}
    </SupabaseContext.Provider>
  );
}

export function useSupabase() {
  return useContext(SupabaseContext);
}
