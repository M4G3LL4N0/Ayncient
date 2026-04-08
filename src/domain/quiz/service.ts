export interface QuizResultInput {
  [key: string]: unknown;
}

export async function saveQuizResult(payload: QuizResultInput) {
  const response = await fetch("/api/save-result", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    let message = "Failed to save quiz result.";
    try {
      const data = await response.json();
      if (data?.error) message = data.error;
    } catch {}
    throw new Error(message);
  }

  return response.json();
}
