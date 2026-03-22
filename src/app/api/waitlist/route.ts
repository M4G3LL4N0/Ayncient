import { createServerClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";
import { WaitlistSignup } from "@/lib/types";

export async function POST(request: Request) {
  try {
    const supabase = createServerClient();
    const { email, source } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("waitlist")
      .insert<WaitlistSignup>([
        {
          email,
          source,
          metadata: {},
        },
      ])
      .select()
      .single();

    if (error) {
      throw error;
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to join waitlist" },
      { status: 500 }
    );
  }
}
