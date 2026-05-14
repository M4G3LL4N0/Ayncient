"use client";

import { createBrowserClient as createSupabaseBrowserClient } from "@supabase/ssr";

export function createBrowserSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return null;
  }

  return createSupabaseBrowserClient(supabaseUrl, supabaseAnonKey, {
    db: {
      schema: "ayncient",
    },
  });
}
