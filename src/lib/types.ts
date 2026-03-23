export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type WaitlistSignup = {
  id: string;
  email: string;
  source: string;
  metadata: Json;
  created_at: string;
};

export type QuizResultRow = {
  id: string;
  email: string | null;
  user_id: string | null;
  total_score: number;
  level: string;
  category_scores: Record<string, number>;
  answers: Record<string, number>;
  source: string;
  created_at: string;
};

export type ProfileRow = {
  id: string;
  user_id: string;
  display_name: string | null;
  age_range: string | null;
  goals: string[];
  created_at: string;
  updated_at: string;
};

export type AlignmentScoreRow = {
  id: string;
  user_id: string;
  total_score: number;
  sleep_score: number;
  sunlight_score: number;
  movement_score: number;
  food_score: number;
  hydration_score: number;
  stress_score: number;
  digital_score: number;
  nature_score: number;
  social_score: number;
  rhythm_score: number;
  created_at: string;
};

export type DailyCheckinRow = {
  id: string;
  user_id: string;
  sleep_hours: number | null;
  morning_sunlight: boolean | null;
  movement_minutes: number | null;
  processed_food_level: number | null;
  hydration_level: number | null;
  stress_level: number | null;
  screen_hours: number | null;
  nature_exposure: number | null;
  social_connection: number | null;
  routine_consistency: number | null;
  notes: string | null;
  checkin_date: string;
  created_at: string;
};

export type ProtocolRow = {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  benefits: string[];
  steps: string[];
  difficulty: string;
  is_active: boolean;
  created_at: string;
};

export type UserProtocolRow = {
  id: string;
  user_id: string;
  protocol_id: string;
  status: string;
  started_at: string | null;
  completed_at: string | null;
  created_at: string;
};

export type JournalEntryRow = {
  id: string;
  user_id: string;
  mood: string | null;
  energy: number | null;
  content: string;
  created_at: string;
  updated_at: string;
};
