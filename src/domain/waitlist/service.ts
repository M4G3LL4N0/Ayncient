import { SupabaseClient } from "@supabase/supabase-js";

type WaitlistPayload = {
  email: string;
  source?: string;
};

/**
 * Adds an email to the waitlist.
 * Returns { error?: string }.
 */
export async function addToWaitlist(
  payload: WaitlistPayload,
  supabaseFactory?: () => Promise<SupabaseClient | null>
) {
  if (!payload.email) {
    return { error: "Email required" };
  }

  const getClient = supabaseFactory
    ? supabaseFactory
    : async () => {
        const { createServerSupabaseClient } = await import("@/lib/supabase/server");
        return await createServerSupabaseClient();
      };

  const supabase = await getClient();

  if (!supabase) {
    return { error: "Supabase not configured" };
  }

  const { error } = await supabase
    .from("waitlist_signups")
    .insert({ email: payload.email, source: payload.source ?? "web" });

  if (error) {
    return { error: error.message };
  }

  return {};
}
