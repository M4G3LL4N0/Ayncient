import { NextResponse } from "next/server";
import { addToWaitlist } from "@/domain/waitlist/service";

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

    const { error } = await addToWaitlist(body);

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}
