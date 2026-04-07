"use client";

import { useState } from "react";
import { useSupabase } from "@/lib/supabase-provider";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { submitDailyCheckin } from "@/domain/checkin/service";

export default function DailyCheckinForm() {
  const { supabase } = useSupabase();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    sleep_hours: null as number | null,
    morning_sunlight: null as boolean | null,
    movement_minutes: null as number | null,
    processed_food_level: null as number | null,
    hydration_level: null as number | null,
    stress_level: null as number | null,
    screen_hours: null as number | null,
  });

  const handleChange = (field: keyof typeof formData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    if (formData.sleep_hours === null) {
      toast.error("Please enter your hours of sleep");
      return false;
    }
    if (formData.morning_sunlight === null) {
      toast.error("Please specify if you got morning sunlight");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const { error } = await submitDailyCheckin(supabase, formData);
      if (error) throw error;

      toast.success("Check-in submitted successfully!");
      router.push("/dashboard");
    } catch (err: any) {
      toast.error(err.message || "Failed to submit check-in");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* ... UI unchanged ... */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-medium rounded-lg transition-colors"
      >
        {isSubmitting ? "Submitting..." : "Submit Check-in"}
      </button>
    </form>
  );
}
