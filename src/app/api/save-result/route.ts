import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const email = body?.email ? String(body.email).trim() : null;
    const total_score = Number(body?.total_score ?? 0);
    const level = String(body?.level || "").trim();
    const category_scores =
      body?.category_scores && typeof body.category_scores === "object"
        ? body.category_scores
        : {};
    const answers =
      body?.answers && typeof body.answers === "object"
        ? body.answers
        : {};

    if (!level || Number.isNaN(total_score)) {
      return NextResponse.json(
        { error: "Missing or invalid result payload." },
        { status: 400 }
      );
    }

    const supabase = await createServerSupabaseClient();

    if (!supabase) {
      return NextResponse.json(
        { error: "Supabase is not configured yet." },
        { status: 503 }
      );
    }

    const { error } = await supabase.from("quiz_results").insert({
      email,
      total_score,
      level,
      category_scores,
      answers,
      source: "quiz",
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
