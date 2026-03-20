import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="container grid items-center gap-10 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <div className="eyebrow mb-5">Modern life is unnatural</div>
          <h1 className="max-w-4xl text-5xl font-bold leading-[0.9] tracking-[-0.05em] md:text-7xl">
            Live as designed.
          </h1>
          <p className="subtle mt-6 max-w-2xl text-lg leading-8 md:text-xl">
            Ayncient helps you realign your life with human biology through better
            sleep, food, movement, light, stress, and daily rhythms.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/quiz" className="btn-primary">
              Take the Ayncient Alignment Score
            </Link>
            <a href="#philosophy" className="btn-secondary">
              Explore the Philosophy
            </a>
          </div>

          <div className="mt-10 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
            {[
              "Sleep",
              "Sunlight",
              "Movement",
              "Rhythm",
              "Food",
              "Nature",
              "Stress",
              "Focus",
            ].map((item) => (
              <div
                key={item}
                className="rounded-full border border-white/8 bg-white/4 px-4 py-3 text-center text-sm font-medium"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6 md:p-8">
          <div className="eyebrow mb-4">Alignment preview</div>
          <div className="rounded-[24px] border border-white/8 bg-black/20 p-6">
            <div className="subtle text-sm">Today&apos;s score</div>
            <div className="mt-2 text-7xl font-bold tracking-[-0.05em]">74</div>
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
                      className="h-full rounded-full bg-[var(--accent)]"
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
    </section>
  );
}
