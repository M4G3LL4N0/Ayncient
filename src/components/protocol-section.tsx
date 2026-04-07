import Link from "next/link";

const protocol = [
  "Get outdoor light within 30 minutes of waking",
  "Move early: walk, mobility, or training",
  "Prioritize protein and simpler foods",
  "Reduce overstimulation throughout the day",
  "Keep a more consistent evening routine",
  "Limit bright screens before sleep",
];

export function ProtocolSection() {
  return (
    <section id="protocol" className="section-spacing">
      <div className="container">
        <div className="card grid gap-8 p-8 md:gap-12 md:p-10 lg:p-12 lg:grid-cols-[1fr_.9fr]">
          <div>
            <div className="eyebrow mb-4">The first protocol</div>
            <h2 className="section-title max-w-2xl">
              Start with the Ayncient 7-Day Reset.
            </h2>
            <p className="subtle mt-5 max-w-2xl text-lg leading-relaxed">
              Before the full app experience, the fastest path is simple:
              reconnect to the fundamentals and feel the difference.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/quiz" className="btn-primary">
                Get Your Score
              </Link>
              <a href="#waitlist" className="btn-secondary">
                Join the Waitlist
              </a>
            </div>
          </div>

          <div className="rounded-[24px] border border-white/8 bg-black/20 p-8">
            <div className="text-lg font-semibold">7-Day Reset Includes</div>
            <ul className="mt-6 space-y-4">
              {protocol.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-white/8 bg-white/4 px-6 py-5 text-sm leading-relaxed"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-white/10">
              <a href="/quiz" className="btn-primary w-full">
                Start Reset
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
