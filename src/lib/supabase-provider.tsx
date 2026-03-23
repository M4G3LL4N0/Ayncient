"use client";

import { createBrowserClient } from "./supabase/client";

export function useSupabase() {
  return createBrowserClient();
}
