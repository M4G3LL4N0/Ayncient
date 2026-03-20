"use client";

import { useState } from "react";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="waitlist" className="py-20 md:py-28">
      <div className="container">
        <div className="card p-8 md:p-12">
          <div className="eyebrow mb-4">Early access</div>
          <h2 className="section-title max-w-3xl">Return to human.</h2>
          <p className="subtle mt-5 max-w-2xl text-lg leading-8">
            Start with your Alignment Score. Join the early list for the full
            Ayncient app, guided protocols, and the 7-Day Reset.
          </p>

          <form
            className="mt-8 flex max-w-2xl flex-col gap-4 md:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              if (!email.trim()) return;
              setSubmitted(true);
            }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="h-14 flex-1 rounded-full border border-white/8 bg-white/4 px-5 outline-none placeholder:text-[#c9b99c]/60"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="btn-primary h-14 px-8">
              Join Waitlist
            </button>
          </form>

          {submitted && (
            <p className="mt-4 text-sm text-[var(--accent)]">
              You&apos;re in. Next step: wire this to Supabase or Resend.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
