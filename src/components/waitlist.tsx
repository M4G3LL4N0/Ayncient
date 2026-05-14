"use client";

import { useState } from "react";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "homepage" }),
      });

      if (!response.ok) {
        throw new Error("Waitlist backend is not configured yet.");
      }

      setSubmitted(true);
      setEmail("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="waitlist" className="py-24">
      <div className="container">
        <div className="card p-8 md:p-12">
          <div className="eyebrow mb-5">Early Access</div>
          <h2 className="max-w-3xl text-4xl font-black leading-tight tracking-[-.05em] md:text-6xl">
            Start your return to human.
          </h2>
          <p className="subtle mt-5 max-w-2xl text-lg leading-8">
            Join the early list for the Ayncient app, Alignment Score, 7-Day Reset,
            protocols, dashboard, and future biological alignment tools.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 flex max-w-2xl flex-col gap-4 md:flex-row">
            <input
              type="email"
              required
              value={email}
              disabled={loading}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
              className="h-14 flex-1 rounded-full border border-white/10 bg-black/25 px-5 text-[#f6ead8] outline-none placeholder:text-[#786a55]"
            />
            <button type="submit" disabled={loading} className="btn-primary">
              {loading ? "Joining..." : "Join Waitlist"}
            </button>
          </form>

          {submitted && <p className="mt-4 text-sm text-[#c8a15d]">You&apos;re on the list.</p>}
          {error && <p className="mt-4 text-sm text-red-300">{error}</p>}
        </div>
      </div>
    </section>
  );
}
