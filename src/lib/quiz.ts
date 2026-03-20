export type QuizQuestion = {
  key: string;
  category:
    | "sleep"
    | "sunlight"
    | "movement"
    | "food"
    | "hydration"
    | "stress"
    | "digital"
    | "nature"
    | "social"
    | "rhythm";
  title: string;
  options: { label: string; value: number }[];
};

export const quizQuestions: QuizQuestion[] = [
  {
    key: "sleep_hours",
    category: "sleep",
    title: "How many hours do you usually sleep?",
    options: [
      { label: "Under 5", value: 0 },
      { label: "5–6", value: 1 },
      { label: "6–7", value: 2 },
      { label: "7–8", value: 3 },
      { label: "8+", value: 4 },
    ],
  },
  {
    key: "morning_light",
    category: "sunlight",
    title: "Do you get outdoor morning light within 1 hour of waking?",
    options: [
      { label: "Never", value: 0 },
      { label: "1–2 days/week", value: 1 },
      { label: "3–4 days/week", value: 2 },
      { label: "5–6 days/week", value: 3 },
      { label: "Daily", value: 4 },
    ],
  },
  {
    key: "movement",
    category: "movement",
    title: "How much daily movement do you get?",
    options: [
      { label: "Very little", value: 0 },
      { label: "Low", value: 1 },
      { label: "Moderate", value: 2 },
      { label: "Good", value: 3 },
      { label: "High", value: 4 },
    ],
  },
  {
    key: "processed_food",
    category: "food",
    title: "How often do you eat highly processed foods?",
    options: [
      { label: "Most meals", value: 0 },
      { label: "Daily", value: 1 },
      { label: "Several times/week", value: 2 },
      { label: "Occasionally", value: 3 },
      { label: "Rarely", value: 4 },
    ],
  },
  {
    key: "hydration",
    category: "hydration",
    title: "How would you rate your daily hydration?",
    options: [
      { label: "Very poor", value: 0 },
      { label: "Poor", value: 1 },
      { label: "Okay", value: 2 },
      { label: "Good", value: 3 },
      { label: "Excellent", value: 4 },
    ],
  },
  {
    key: "stress",
    category: "stress",
    title: "How often do you feel chronically stressed or overstimulated?",
    options: [
      { label: "Always", value: 0 },
      { label: "Often", value: 1 },
      { label: "Sometimes", value: 2 },
      { label: "Rarely", value: 3 },
      { label: "Never", value: 4 },
    ],
  },
  {
    key: "screen_time",
    category: "digital",
    title: "How much recreational screen time do you get daily?",
    options: [
      { label: "8+ hours", value: 0 },
      { label: "6–8 hours", value: 1 },
      { label: "4–6 hours", value: 2 },
      { label: "2–4 hours", value: 3 },
      { label: "Under 2 hours", value: 4 },
    ],
  },
  {
    key: "nature",
    category: "nature",
    title: "How often are you outside in natural environments?",
    options: [
      { label: "Almost never", value: 0 },
      { label: "1x/week", value: 1 },
      { label: "2–3x/week", value: 2 },
      { label: "4–5x/week", value: 3 },
      { label: "Daily", value: 4 },
    ],
  },
  {
    key: "social",
    category: "social",
    title: "Do you regularly spend meaningful time with people you care about?",
    options: [
      { label: "Almost never", value: 0 },
      { label: "Rarely", value: 1 },
      { label: "Sometimes", value: 2 },
      { label: "Often", value: 3 },
      { label: "Consistently", value: 4 },
    ],
  },
  {
    key: "routine",
    category: "rhythm",
    title: "How consistent are your wake time, meals, movement, and sleep?",
    options: [
      { label: "Chaotic", value: 0 },
      { label: "Inconsistent", value: 1 },
      { label: "Mixed", value: 2 },
      { label: "Mostly consistent", value: 3 },
      { label: "Very consistent", value: 4 },
    ],
  },
];

export type QuizResult = {
  totalScore: number;
  level: string;
  message: string;
  categoryScores: Record<string, number>;
};

export function calculateQuizResult(answers: Record<string, number>): QuizResult {
  const categoryTotals: Record<string, { sum: number; count: number }> = {};

  for (const question of quizQuestions) {
    const value = answers[question.key] ?? 0;
    if (!categoryTotals[question.category]) {
      categoryTotals[question.category] = { sum: 0, count: 0 };
    }
    categoryTotals[question.category].sum += value;
    categoryTotals[question.category].count += 1;
  }

  const categoryScores: Record<string, number> = {};
  let total = 0;

  for (const [category, data] of Object.entries(categoryTotals)) {
    const scaled = Math.round((data.sum / (data.count * 4)) * 10);
    categoryScores[category] = scaled;
    total += scaled;
  }

  let level: string;
  let message: string;
  let icon: string;

  if (total <= 39) {
    level = "Deeply Misaligned";
    message =
      "Your modern habits are actively working against your biology. The good news? Even small adjustments can create rapid improvements in energy, focus and wellbeing.\n\nFocus first on morning light, consistent sleep times, and reducing processed foods.";
    icon = "⚠️";
  } else if (total <= 59) {
    level = "Disconnected";
    message =
      "You have some healthy foundations, but inconsistency and modern stressors are taking their toll. Small daily wins will compound noticeably.\n\nTry adding 15 minutes of morning movement and reducing evening screen time first.";
    icon = "🌱";
  } else if (total <= 74) {
    level = "Rebuilding";
    message =
      "You're making great progress in key areas! Double down on consistency - particularly sleep timing, movement variety, and digital boundaries.\n\nYour next focus: improve protein intake and create digital-free periods each day.";
    icon = "🏗️";
  } else if (total <= 89) {
    level = "Well Aligned";
    message =
      "Excellent work! Your lifestyle strongly supports stress resilience and sustained energy. Stay consistent and explore intermediate upgrades like cold exposure, fasting windows, and outdoor immersion.";
    icon = "🌟";
  } else {
    level = "Ayncient State";
    message =
      "Remarkable alignment! Your lifestyle mirrors evolutionary conditions for peak performance. Maintain these foundations while deepening seasonal connections and local food sourcing.";
    icon = "🔥";
  }

  return {
    totalScore: total,
    level,
    message,
    categoryScores,
  };
}
