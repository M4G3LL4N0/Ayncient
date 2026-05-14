"use client";

import { useState } from "react";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.trim()) return;

    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "homepage" }),
      });

      if (!res.ok) {
        throw new Error("Waitlist is not configured yet.");
      }

      setSubmitted(true);
      setEmail("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="waitlist" className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-[2rem] border border-white/5 bg-white/[0.04] p-8 md:p-12">
          <div className="mb-4 text-xs uppercase tracking-[0.35em] text-[#C6A56B]">
            Early Access
          </div>
          <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-[#F5E9D8] md:text-5xl">
            Start your return to human.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#A7957C]">
            Join the early list for the Ayncient app, Alignment Score, 7-Day Reset,
            protocols, dashboard, and future biological alignment tools.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 flex max-w-2xl flex-col gap-4 md:flex-row">
            <input
              type="email"
              required
              value={email}
              disabled={isLoading}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="h-14 flex-1 rounded-full border border-white/10 bg-black/20 px-5 text-[#F5E9D8] outline-none placeholder:text-[#7B6B57]"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="h-14 rounded-full bg-[#C6A56B] px-8 text-sm font-semibold text-[#1B140C] disabled:opacity-60"
            >
              {isLoading ? "Joining..." : "Join Waitlist"}
            </button>
          </form>

          {submitted && (
            <p className="mt-4 text-sm text-[#C6A56B]">
              You&apos;re on the list.
            </p>
          )}

          {error && (
            <p className="mt-4 text-sm text-red-300">
              {error}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
