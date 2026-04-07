import { SupabaseClient } from "@supabase/supabase-js";

type CheckinPayload = {
  sleep_hours: number | null;
  morning_sunlight: boolean | null;
  movement_minutes: number | null;
  processed_food_level: number | null;
  hydration_level: number | null;
  stress_level: number | null;
  screen_hours: number | null;
};

/**
 * Submits a daily check‑in.
 * Returns { error?: string }.
 */
export async function submitDailyCheckin(
  supabase: SupabaseClient,
  payload: CheckinPayload
) {
  const { data: userData, error: authError } = await supabase.auth.getUser();
  if (authError) {
    return { error: authError.message };
  }

  const userId = userData.user?.id;
  if (!userId) {
    return { error: "User not authenticated" };
  }

  const { error } = await supabase.from("daily_checkin").insert([
    {
      ...payload,
      user_id: userId,
    },
  ]);

  if (error) {
    return { error: error.message };
  }

  return {};
}
