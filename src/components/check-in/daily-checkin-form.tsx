"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSupabase } from "@/lib/supabase-provider";

export default function DailyCheckinForm() {
  const { supabase } = useSupabase();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!supabase) {
      console.error("Supabase is not configured.");
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData(event.currentTarget);
      const payload = Object.fromEntries(formData.entries());

      const { error } = await supabase.from("daily_checkins").insert([payload]);

      if (error) {
        throw error;
      }

      router.refresh();
      event.currentTarget.reset();
    } catch (error) {
      console.error("Failed to save daily check-in:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
      <div>
        <label htmlFor="energy" className="mb-2 block text-sm font-medium">
          Energy
        </label>
        <input
          id="energy"
          name="energy"
          type="number"
          min="1"
          max="10"
          required
          className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm outline-none"
        />
      </div>

      <div>
        <label htmlFor="clarity" className="mb-2 block text-sm font-medium">
          Clarity
        </label>
        <input
          id="clarity"
          name="clarity"
          type="number"
          min="1"
          max="10"
          required
          className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm outline-none"
        />
      </div>

      <div>
        <label htmlFor="notes" className="mb-2 block text-sm font-medium">
          Notes
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting || !supabase}
        className="rounded-xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-medium transition hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? "Saving..." : supabase ? "Save Check-In" : "Supabase Not Configured"}
      </button>
    </form>
  );
}
