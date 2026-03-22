import { createServerClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";
import { QuizResultRow } from "@/lib/types";

export async function POST(request: Request) {
  try {
    const supabase = createServerClient();
    const { email, result } = await request.json();

    if (!result) {
      return NextResponse.json(
        { error: "Quiz result is required" },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("quiz_results")
      .insert<QuizResultRow>([
        {
          email: email || null,
          total_score: result.totalScore,
          level: result.level,
          category_scores: result.categoryScores,
          answers: result.answers,
          source: "quiz",
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
      { error: "Failed to save quiz result" },
      { status: 500 }
    );
  }
}
