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

export type Recommendation = {
  category: string;
  title: string;
  description: string;
  icon: string;
  actions: string[];
};

export const recommendations: Record<string, Recommendation> = {
  sleep: {
    category: "Sleep",
    title: "Reclaim Your Nights",
    description: "Sleep is the foundation of all health. Optimize your circadian rhythm and sleep quality with these steps:",
    icon: "🌙",
    actions: [
      "Set consistent sleep/wake times",
      "Create a dark, cool sleep environment",
      "Avoid screens 1 hour before bed",
      "Try magnesium supplements before sleep"
    ]
  },
  sunlight: {
    category: "Sunlight",
    title: "Harness the Power of Light",
    description: "Morning light is nature's reset button. Use it to energize your day:",
    icon: "☀️",
    actions: [
      "Get 10-30 mins of morning sunlight",
      "Take walking meetings outdoors",
      "Use blue light blocking glasses at night",
      "Position your desk near natural light"
    ]
  },
  movement: {
    category: "Movement",
    title: "Move Like Nature Intended",
    description: "Your body thrives on varied, natural movement. Incorporate these daily:",
    icon: "🏃‍♂️",
    actions: [
      "Take 5-minute movement breaks every hour",
      "Try barefoot walking on natural surfaces",
      "Incorporate strength training 3x/week",
      "Practice mobility exercises daily"
    ]
  },
  food: {
    category: "Food",
    title: "Eat Like Your Ancestors",
    description: "Nourish your body with ancestral wisdom. Focus on:",
    icon: "🥩",
    actions: [
      "Prioritize whole, unprocessed foods",
      "Eat protein with every meal",
      "Incorporate fermented foods daily",
      "Time meals with your circadian rhythm"
    ]
  },
  hydration: {
    category: "Hydration",
    title: "Optimize Your Water",
    description: "Proper hydration is key to cellular function. Improve yours with:",
    icon: "💧",
    actions: [
      "Drink 1 glass of water upon waking",
      "Add electrolytes to your water",
      "Monitor urine color throughout the day",
      "Avoid drinking with meals"
    ]
  },
  stress: {
    category: "Stress",
    title: "Master Your Stress",
    description: "Chronic stress undermines health. Regain control with:",
    icon: "🧘‍♀️",
    actions: [
      "Practice daily breathwork",
      "Take regular nature breaks",
      "Establish digital boundaries",
      "Try adaptogenic herbs like ashwagandha"
    ]
  },
  digital: {
    category: "Digital",
    title: "Reclaim Your Attention",
    description: "Digital overload drains your energy. Create balance with:",
    icon: "📱",
    actions: [
      "Set app time limits",
      "Create phone-free zones",
      "Practice digital sunset 1 hour before bed",
      "Schedule tech-free weekends"
    ]
  },
  nature: {
    category: "Nature",
    title: "Reconnect with Nature",
    description: "Nature is our original habitat. Reconnect daily with:",
    icon: "🌳",
    actions: [
      "Take daily walks in green spaces",
      "Practice earthing (barefoot on grass)",
      "Bring plants into your living space",
      "Try forest bathing weekly"
    ]
  },
  social: {
    category: "Social",
    title: "Deepen Your Connections",
    description: "Human connection is vital for wellbeing. Strengthen yours with:",
    icon: "👥",
    actions: [
      "Schedule regular quality time with loved ones",
      "Practice active listening",
      "Join community groups",
      "Express gratitude daily"
    ]
  },
  rhythm: {
    category: "Rhythm",
    title: "Sync with Nature's Cycles",
    description: "Your body thrives on consistency. Align your rhythms with:",
    icon: "⏰",
    actions: [
      "Set consistent meal times",
      "Create morning and evening routines",
      "Align activities with daylight hours",
      "Track your circadian rhythm"
    ]
  }
};

export type QuizResult = {
  totalScore: number;
  level: string;
  message: string;
  subMessage: string;
  ctaPrimary: string; 
  ctaSecondary: string;
  offerHeadline: string;
  categoryScores: Record<string, number>;
  recommendations: Recommendation[];
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

  // Get top 3 weakest categories
  const weakestCategories = Object.entries(categoryScores)
    .sort((a, b) => a[1] - b[1])
    .slice(0, 3)
    .map(([category]) => recommendations[category]);

  const resultsData = {
    totalScore: total,
    level,
    message,
    categoryScores,
    recommendations: weakestCategories,
  };

  if (total <= 39) {
    return {
      ...resultsData,
      subMessage: "Ready for radical change? The 7-Day Reset helps rapidly rebuild foundations.",
      ctaPrimary: "Start My 7-Day Reset",
      ctaSecondary: "See All Suggestions", 
      offerHeadline: "Deep Alignment Bundle (Save 40%)"
    };
  } else if (total <= 59) {
    return {
      ...resultsData,  
      subMessage: "Small consistent upgrades create big results. Our beginner protocol helps simplify the process.",
      ctaPrimary: "Get My Beginner Protocol",
      ctaSecondary: "Quick Start Tips",
      offerHeadline: "30-Day Alignment Jumpstart"
    };
  } else if (total <= 74) {
    return {
      ...resultsData,
      subMessage: "You're on the right path. Our intermediate program helps optimize further.",
      ctaPrimary: "Optimize My Habits", 
      ctaSecondary: "See Advanced Tactics",
      offerHeadline: "Advanced Alignment Toolkit"
    };
  } else {
    return {
      ...resultsData,
      subMessage: "Master level unlocked. Join our community to take it deeper.", 
      ctaPrimary: "Join Masters Community",
      ctaSecondary: "Get Coaching",
      offerHeadline: "1:1 Alignment Coaching"
    };
  }
}
