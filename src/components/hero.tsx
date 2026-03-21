import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden section-spacing bg-gradient-to-b from-[#0f0f0d] to-[#0f0f0d]/95">
      <div className="container grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
        <div className="relative z-10">
          <div className="eyebrow mb-5">Modern life is unnatural</div>
          <h1 className="max-w-4xl text-5xl font-bold leading-[0.9] tracking-[-0.05em] md:text-7xl">
            Reclaim your <span className="bg-gradient-to-r from-[var(--accent)] to-yellow-300 bg-clip-text text-transparent">human design</span>
          </h1>
          <p className="subtle mt-6 max-w-2xl text-lg leading-8 md:text-xl">
            Ayncient is your modern toolkit for ancestral living. Optimize your biology through better sleep, food, movement, light, stress, and daily rhythms.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link 
              href="/quiz" 
              className="btn-primary group flex items-center gap-2"
            >
              <span>Discover Your Alignment Score</span>
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a href="#features" className="btn-secondary">
              Explore the System
            </a>
          </div>

          <div className="mt-10 grid max-w-3xl grid-cols-2 gap-3 md:grid-cols-4">
            {[
              "Sleep Optimization",
              "Circadian Rhythm",
              "Natural Movement",
              "Whole Foods",
              "Stress Resilience",
              "Nature Connection",
              "Focus Enhancement",
              "Daily Rhythm"
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/8 bg-white/4 px-4 py-3 text-center text-sm font-medium hover:bg-white/8 transition-colors"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6 md:p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent)]/10 to-[var(--accent)]/5 opacity-50"></div>
          <div className="relative z-10">
            <div className="eyebrow mb-4">Alignment preview</div>
            <div className="rounded-[24px] border border-white/8 bg-black/20 p-6 backdrop-blur-sm">
              <div className="subtle text-sm">Today&apos;s score</div>
              <div className="mt-2 text-7xl font-bold tracking-[-0.05em] bg-gradient-to-r from-[var(--accent)] to-yellow-300 bg-clip-text text-transparent">
                74
              </div>
              <div className="mt-2 text-lg font-semibold">Rebuilding</div>
              <p className="subtle mt-4 text-sm leading-7">
                Good foundation. Improve morning light, reduce late screens, and
                tighten sleep consistency.
              </p>

              <div className="mt-6 space-y-4">
                {[
                  ["Sleep", 8],
                  ["Sunlight", 5],
                  ["Movement", 7],
                  ["Food", 8],
                  ["Stress", 6],
                ].map(([label, value]) => (
                  <div key={label as string}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="subtle">{label as string}</span>
                      <span>{value}/10</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/8">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[var(--accent)] to-yellow-300"
                        style={{ width: `${Number(value) * 10}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-white/8 bg-white/4 p-4">
                <div className="text-sm font-semibold">Daily Protocol</div>
                <p className="subtle mt-2 text-sm leading-7">
                  Morning sun within 30 minutes, protein-forward first meal, 8k+
                  steps, no bright screens 90 minutes before bed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[var(--accent)]/10 via-[var(--accent)]/5 to-transparent opacity-20"></div>
    </section>
  );
}
