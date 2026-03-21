import { Waitlist } from "@/components/waitlist";
import Image from "next/image";

export default function ResetPage() {
  return (
    <main className="space-y-16 md:space-y-28">
      <section className="section-spacing">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="eyebrow mb-4">The Ayncient Protocol</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              The 7-Day Reset
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/70 max-w-2xl mx-auto">
              Reclaim your natural rhythm with our foundational protocol designed to 
              reset your body, mind, and energy in just one week.
            </p>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                What You'll Experience
              </h2>
              <p className="mt-4 text-lg leading-8 text-white/70">
                The 7-Day Reset is your gateway to better sleep, improved focus, 
                and sustained energy through ancestral principles adapted for modern life.
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--accent)] flex items-center justify-center">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold">Daily Guidance</h3>
                    <p className="mt-1 text-sm text-white/70">
                      Step-by-step instructions tailored to your progress
                    </p>
                  </div>
                </div>
                {/* Repeat for other benefits */}
              </div>
            </div>
            <div className="bg-white/5 rounded-2xl p-6">
              <Image
                src="/public/globe.svg"
                alt="Reset Protocol"
                width={500}
                height={500}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-center">
              Daily Breakdown
            </h2>
            <div className="mt-12 space-y-8">
              {[...Array(7)].map((_, i) => (
                <div key={i} className="bg-white/5 rounded-2xl p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--accent)] flex items-center justify-center">
                      {i + 1}
                    </div>
                    <h3 className="text-xl font-semibold">
                      Day {i + 1}: Focus Area
                    </h3>
                  </div>
                  <p className="mt-4 text-sm text-white/70">
                    Detailed description of the day's protocol and benefits...
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Waitlist />
    </main>
  );
}
