import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(198,165,107,0.20),transparent_45%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0A0907] to-transparent" />

      <div className="relative mx-auto grid min-h-[88vh] max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-[#C6A56B]/20 bg-[#C6A56B]/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#D9BE91]">
            Biological Alignment OS
          </div>

          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#F5E9D8] md:text-7xl">
            Live as designed.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#B7A48B] md:text-xl">
            Ayncient helps modern humans realign with the conditions our bodies evolved for:
            sleep, sunlight, movement, real food, nature, rhythm, recovery, and connection.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/quiz"
              className="rounded-full bg-[#C6A56B] px-8 py-4 text-center text-sm font-semibold text-[#1B140C] transition hover:scale-[1.02]"
            >
              Take Alignment Quiz
            </Link>

            <Link
              href="/reset"
              className="rounded-full border border-white/10 bg-white/5 px-8 py-4 text-center text-sm font-medium text-[#EADCC7] transition hover:bg-white/10"
            >
              Explore 7-Day Reset
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/40">
          <div className="rounded-[1.5rem] border border-white/10 bg-black/30 p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-[#C6A56B]">Alignment Score</p>
            <div className="mt-5 flex items-end gap-3">
              <span className="text-7xl font-semibold tracking-[-0.08em]">74</span>
              <span className="pb-3 text-[#B7A48B]">/ 100</span>
            </div>
            <p className="mt-3 text-lg font-medium text-[#F5E9D8]">Rebuilding</p>
            <p className="mt-4 leading-7 text-[#A7957C]">
              Strong foundation. Improve morning light, reduce late screens, and stabilize sleep rhythm.
            </p>

            <div className="mt-8 space-y-4">
              {[
                ["Sleep", "82%"],
                ["Sunlight", "54%"],
                ["Movement", "70%"],
                ["Food", "78%"],
                ["Rhythm", "61%"],
              ].map(([label, width]) => (
                <div key={label}>
                  <div className="mb-2 flex justify-between text-sm text-[#B7A48B]">
                    <span>{label}</span>
                    <span>{width}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-[#C6A56B]" style={{ width }} />
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
