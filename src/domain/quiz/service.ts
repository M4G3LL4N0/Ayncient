import { SupabaseClient } from "@supabase/supabase-js";

type SavePayload = {
  email?: string | null;
  total_score: number;
  level: string;
  category_scores?: Record<string, number>;
  answers?: Record<string, number>;
};

/**
 * Persists a quiz result.
 * Returns { error?: string } – error is present when validation or DB insertion fails.
 */
export async function saveQuizResult(
  payload: SavePayload,
  supabaseFactory?: () => Promise<SupabaseClient | null>
) {
  // Basic validation
  if (!payload.level || Number.isNaN(payload.total_score)) {
    return { error: "Missing or invalid result payload." };
  }

  // Obtain a Supabase client – either injected (for route handlers) or created on the fly
  const getClient = supabaseFactory
    ? supabaseFactory
    : async () => {
        const { createServerSupabaseClient } = await import("@/lib/supabase/server");
        return await createServerSupabaseClient();
      };

  const supabase = await getClient();

  if (!supabase) {
    return { error: "Supabase is not configured." };
  }

  const { error } = await supabase.from("quiz_results").insert({
    email: payload.email ?? null,
    total_score: payload.total_score,
    level: payload.level,
    category_scores: payload.category_scores ?? {},
    answers: payload.answers ?? {},
    source: "quiz",
  });

  if (error) {
    return { error: error.message };
  }

  return {};
}
