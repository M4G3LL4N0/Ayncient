import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

/**
 * POST /api/waitlist
 *
 * Expected payload:
 * {
 *   email: string,
 *   source?: string
 * }
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const email = typeof body?.email === "string" ? body.email.trim() : "";

    if (!email) {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      return NextResponse.json(
        { error: "Waitlist is not configured yet." },
        { status: 503 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey, {
      db: {
        schema: "ayncient",
      },
    });

    const { error } = await supabase.from("waitlist").insert([
      {
        email,
        name: typeof body?.name === "string" ? body.name.trim() : null,
        source: typeof body?.source === "string" ? body.source : "website",
        created_at: new Date().toISOString(),
      },
    ]);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}
