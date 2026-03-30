"use client";

import { useState } from "react";
import { useSupabase } from "@/lib/supabase-provider";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

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
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from("daily_checkin")
        .insert([{ ...formData }]);

      if (error) throw error;

      toast.success("Check-in submitted successfully!");
      router.refresh();
    } catch (error) {
      toast.error("Failed to submit check-in");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Daily Check-in</h2>
        <p className="text-gray-600">Track your daily wellness metrics</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Sleep */}
        <div className="space-y-2">
          <label className="block font-medium">Sleep (hours)</label>
          <input
            type="number"
            min="0"
            max="24"
            value={formData.sleep_hours ?? ""}
            onChange={(e) => handleChange("sleep_hours", Number(e.target.value) || null)}
            className="w-full p-3 border rounded-lg"
            required
          />
        </div>

        {/* Sunlight */}
        <div className="space-y-2">
          <label className="block font-medium">Morning Sunlight</label>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => handleChange("morning_sunlight", true)}
              className={`flex-1 py-2 rounded-lg ${formData.morning_sunlight === true ? "bg-green-500 text-white" : "bg-gray-100"}`}
            >
              Yes
            </button>
            <button
              type="button"
              onClick={() => handleChange("morning_sunlight", false)}
              className={`flex-1 py-2 rounded-lg ${formData.morning_sunlight === false ? "bg-red-500 text-white" : "bg-gray-100"}`}
            >
              No
            </button>
          </div>
        </div>

        {/* Movement */}
        <div className="space-y-2">
          <label className="block font-medium">Movement (minutes)</label>
          <input
            type="number"
            min="0"
            value={formData.movement_minutes ?? ""}
            onChange={(e) => handleChange("movement_minutes", Number(e.target.value) || null)}
            className="w-full p-3 border rounded-lg"
            required
          />
        </div>

        {/* Processed Food */}
        <div className="space-y-2">
          <label className="block font-medium">Processed Food Level (1-10)</label>
          <input
            type="number"
            min="1"
            max="10"
            value={formData.processed_food_level ?? ""}
            onChange={(e) => handleChange("processed_food_level", Number(e.target.value) || null)}
            className="w-full p-3 border rounded-lg"
            required
          />
        </div>

        {/* Hydration */}
        <div className="space-y-2">
          <label className="block font-medium">Hydration Level (1-10)</label>
          <input
            type="number"
            min="1"
            max="10"
            value={formData.hydration_level ?? ""}
            onChange={(e) => handleChange("hydration_level", Number(e.target.value) || null)}
            className="w-full p-3 border rounded-lg"
            required
          />
        </div>

        {/* Stress */}
        <div className="space-y-2">
          <label className="block font-medium">Stress Level (1-10)</label>
          <input
            type="number"
            min="1"
            max="10"
            value={formData.stress_level ?? ""}
            onChange={(e) => handleChange("stress_level", Number(e.target.value) || null)}
            className="w-full p-3 border rounded-lg"
            required
          />
        </div>

        {/* Screen Time */}
        <div className="space-y-2">
          <label className="block font-medium">Screen Time (hours)</label>
          <input
            type="number"
            min="0"
            value={formData.screen_hours ?? ""}
            onChange={(e) => handleChange("screen_hours", Number(e.target.value) || null)}
            className="w-full p-3 border rounded-lg"
            required
          />
        </div>
      </div>

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
