"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { addToWaitlist } from "@/domain/waitlist/service";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      await addToWaitlist({
        email,
        source: "site",
      });
      setSubmitted(true);
      setEmail("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <h3 className="text-xl font-semibold">Join the waitlist</h3>
      <p className="mt-2 text-sm text-neutral-400">
        Get early access when Ayncient opens.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="min-w-0 flex-1 rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm outline-none placeholder:text-neutral-500"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-medium transition hover:bg-white/15 disabled:opacity-60"
        >
          {isSubmitting ? "Joining..." : "Join"}
        </button>
      </form>

      {submitted && (
        <p className="mt-4 text-sm text-[#d79342]">
          <Check size={18} className="mr-2 inline" />
          You're on the waitlist. We'll be in touch soon.
        </p>
      )}

      {error && <p className="mt-4 text-sm text-red-400">{error}</p>}
    </div>
  );
}
