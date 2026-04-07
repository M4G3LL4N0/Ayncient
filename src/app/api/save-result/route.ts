import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { saveQuizResult } from "@/domain/quiz/service";

/**
 * POST /api/save-result
 *
 * Expected payload:
 * {
 *   email?: string,
 *   total_score: number,
 *   level: string,
 *   category_scores?: Record<string, number>,
 *   answers?: Record<string, number>
 * }
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Delegate validation & persistence to the domain service
    const { error } = await saveQuizResult(body, createServerSupabaseClient);

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}
