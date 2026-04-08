import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-32 md:pt-36 md:pb-40 lg:pt-44 lg:pb-48 animate-fadeIn">
      <div className="container relative z-10">
        <div className="grid items-center gap-20 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <div>
            <div className="eyebrow mb-6 opacity-80">THE MODERN HUMAN CONDITION</div>
            <h1 className="mb-10 max-w-3xl text-5xl md:text-6xl font-bold leading-tight tracking-tight">
              <span className="block bg-gradient-to-r from-cta-primary to-cta-secondary bg-clip-text text-transparent animate-gradient-x">
                Optimized biology.
              </span>
              <span className="block bg-gradient-to-r from-cta-secondary to-cta-primary bg-clip-text text-transparent animate-gradient-x animation-delay-1000">
                Human design.
              </span>
            </h1>
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-gradient-to-r from-cta-primary/10 to-cta-secondary/5 rounded-full blur-3xl opacity-40 animate-float"></div>
              <div className="absolute top-[40%] right-[15%] w-48 h-48 bg-gradient-to-r from-cta-secondary/10 to-cta-primary/5 rounded-full blur-2xl opacity-30 animate-float animation-delay-2000"></div>
            </div>
            <p className="max-w-2xl text-lg leading-relaxed text-[#d9c9ac] mb-8">
              Ayncient intelligently reconnects modern life with evolutionary necessities.
              Measure and master sleep, light, movement, nutrition, stress, and circadian rhythm.
            </p>

            <div className="mb-8 flex flex-wrap gap-4">
              <Link 
                href="/quiz" 
                className="btn-primary group flex items-center gap-3 hover:from-cta-secondary hover:to-cta-primary transition-all duration-200 relative overflow-hidden rounded-lg"
              >
                <span className="relative z-10 tracking-tight">Start With Your Score</span>
                <ArrowRight size={18} className="relative z-10 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-cta-primary to-cta-secondary opacity-100 group-hover:opacity-90 transition-opacity rounded-lg"></div>
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
              </Link>
              <a href="#waitlist" className="btn-secondary hover:bg-white/10">
                Join Waitlist
              </a>
            </div>

            <div className="trust-badges">
              <span className="trust-badge">No spam</span>
              <span className="trust-badge">Data privacy</span>
              <span className="trust-badge">Cancel anytime</span>
            </div>
          </div>

          <div className="card p-8 md:p-10 relative overflow-hidden hover:shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-cta-primary/10 to-cta-secondary/5 opacity-60"></div>
            <div className="relative z-10">
              <div className="eyebrow mb-4">Alignment preview</div>
              <div className="rounded-[24px] border border-white/8 bg-black/20 p-6 backdrop-blur-sm hover:border-white/12 transition-all">
                <div className="subtle text-sm">Today's score</div>
                <div className="mt-2 text-6xl font-bold tracking-[-0.05em] text-gradient">
                  74
                </div>
                <div className="mt-2 text-2xl font-semibold">Rebuilding</div>
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
                    <div key={label}>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span className="subtle">{label}</span>
                        <span>{value}/10</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/8">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-cta-primary to-cta-secondary"
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

        <div className="social-proof mt-12 text-center">
          <span className="social-proof-item">Join 5,000+ humans</span>
          <span className="social-proof-item">Early access only</span>
          <span className="social-proof-item">7-day free trial</span>
        </div>
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cta-primary/20 via-cta-secondary/15 to-transparent animate-gradient-x"></div>
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-black/50 to-black/80"></div>
      <div className="absolute inset-0 -z-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/80 to-black"></div>
    </section>
  );
}
