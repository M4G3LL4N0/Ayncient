"use client";

import { useState } from "react";
import { useSupabase } from "@/lib/supabase-provider";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const supabase = useSupabase();

  return (
    <section id="waitlist" className="section-spacing">
      <div className="container">
        <div className="card p-10 md:p-14">
          <div className="eyebrow mb-4">Early access</div>
          <h2 className="section-title max-w-3xl">Start Your Reset Today</h2>
          <p className="subtle mt-5 max-w-2xl text-lg leading-8">
            Be among the first to experience the 7-Day Reset protocol. 
            Join the waitlist for early access to guided daily routines, 
            expert support, and transformative results.
          </p>

          <form
            className="mt-8 flex max-w-2xl flex-col gap-4 md:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              if (!email.trim()) return;
              
              setIsLoading(true);
              setError(null);
              
              try {
                const { error } = await supabase
                  .from('waitlist')
                  .insert({ email });
                  
                if (error) throw error;
                setSubmitted(true);
              } catch (err) {
                setError('Failed to join waitlist. Please try again.');
              } finally {
                setIsLoading(false);
              }
            }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="h-12 md:h-14 flex-1 rounded-full border border-white/8 bg-white/4 px-4 md:px-5 outline-none placeholder:text-[#c9b99c]/60"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button 
              type="submit" 
              className="btn-primary h-14 px-8"
              disabled={isLoading}
            >
              {isLoading ? 'Joining...' : 'Join Waitlist'}
            </button>
          </form>

          {submitted && (
            <p className="mt-4 text-sm text-[var(--accent)]">
              You're on the waitlist! We'll be in touch soon.
            </p>
          )}
          {error && (
            <p className="mt-4 text-sm text-red-500">
              {error}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
