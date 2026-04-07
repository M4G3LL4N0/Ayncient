"use client";

import { useState } from "react";
import { addToWaitlist } from "@/domain/waitlist/service";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.trim()) return;

    setIsLoading(true);
    setError(null);

    try {
      const { error } = await addToWaitlist({ email, source: "homepage" });
      if (error) throw new Error(error);
      setSubmitted(true);
      setEmail("");
    } catch (e: any) {
      setError(e.message || "Failed to join waitlist. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="waitlist" className="section-spacing">
      <div className="container">
        <div className="card p-8 md:p-12">
          <div className="eyebrow mb-4">Early access</div>
          <h2 className="section-title max-w-3xl">Return to human.</h2>
          <p className="section-intro">
            Start with your Alignment Score. Join the early list for the full
            Ayncient app, guided protocols, and the 7-Day Reset.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col gap-4 md:flex-row"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
              className="input-field flex-1"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary h-14 px-8"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span>Joining...</span>
                  <span className="loading-spinner" />
                </span>
              ) : (
                "Join Waitlist"
              )}
            </button>
          </form>

          {submitted && (
            <p className="mt-4 text-sm text-[#d79342]">
              <Check size={18} className="inline mr-2" />
              You're on the waitlist. We'll be in touch soon.
            </p>
          )}

          {error && <p className="form-error mt-4">{error}</p>}

          <div className="mt-8 pt-6 border-t border-white/10">
            <a href="/quiz" className="btn-secondary w-full">
              Get Your Score First
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
