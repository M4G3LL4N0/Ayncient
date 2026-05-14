import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const hasSupabaseEnv =
      !!process.env.NEXT_PUBLIC_SUPABASE_URL &&
      !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!hasSupabaseEnv) {
      return NextResponse.json(
        { error: "Quiz result storage is not configured yet." },
        { status: 503 }
      );
    }

    const supabase = await createServerSupabaseClient();

    const { error } = await supabase.from("quiz_results").insert([
      {
        ...body,
        created_at: new Date().toISOString(),
      },
    ]);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to save quiz result.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
