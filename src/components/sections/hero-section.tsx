import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="container grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <div className="eyebrow mb-6">Biological Alignment OS</div>

          <h1 className="max-w-4xl text-6xl font-black leading-[.86] tracking-[-.07em] md:text-8xl">
            Live as designed.
          </h1>

          <p className="subtle mt-7 max-w-2xl text-lg leading-8 md:text-xl">
            Ayncient helps modern humans realign with the conditions our bodies evolved for:
            sleep, sunlight, movement, food, nature, rhythm, recovery, and real connection.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link href="/quiz" className="btn-primary">
              Take Alignment Quiz
            </Link>
            <Link href="/reset" className="btn-secondary">
              Explore 7-Day Reset
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 text-sm text-[#b9a68a] md:grid-cols-4">
            {["Sleep", "Sunlight", "Movement", "Food", "Nature", "Rhythm", "Stress", "Connection"].map((item) => (
              <div key={item} className="rounded-full border border-white/8 bg-white/[.035] px-4 py-3 text-center">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="card p-5 md:p-7">
          <div className="rounded-[1.5rem] border border-white/8 bg-black/30 p-6">
            <div className="eyebrow">Alignment Score</div>
            <div className="mt-5 flex items-end gap-3">
              <span className="text-8xl font-black tracking-[-.08em]">74</span>
              <span className="pb-4 text-[#b9a68a]">/100</span>
            </div>
            <div className="mt-2 text-xl font-bold">Rebuilding</div>
            <p className="subtle mt-4 leading-7">
              Improve morning light, reduce late screens, and stabilize sleep rhythm.
            </p>

            <div className="mt-8 space-y-5">
              {[
                ["Sleep", "82%"],
                ["Sunlight", "54%"],
                ["Movement", "70%"],
                ["Food", "78%"],
                ["Rhythm", "61%"],
              ].map(([label, width]) => (
                <div key={label}>
                  <div className="mb-2 flex justify-between text-sm text-[#b9a68a]">
                    <span>{label}</span>
                    <span>{width}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-[#c8a15d]" style={{ width }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
