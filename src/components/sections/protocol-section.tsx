import Link from "next/link";

export function ProtocolSection() {
  return (
    <section id="protocols" className="border-y border-white/5 bg-[#0D0C09] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <div className="mb-4 text-xs uppercase tracking-[0.35em] text-[#C6A56B]">
            7-Day Reset
          </div>
          <h2 className="text-4xl font-semibold tracking-[-0.05em] text-[#F5E9D8] md:text-5xl">
            Interrupt overstimulation. Restore alignment.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#A7957C]">
            The Ayncient Reset combines sleep optimization, morning sunlight,
            movement, nature exposure, digital reduction, nutrition structure,
            hydration, and rhythm stabilization into one guided protocol.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            "Sleep & recovery",
            "Sunlight & circadian rhythm",
            "Movement & mobility",
            "Food & hydration",
            "Stress reduction",
            "Digital reset",
          ].map((item) => (
            <div key={item} className="rounded-3xl border border-white/5 bg-black/20 p-6">
              <div className="text-lg font-medium text-[#F0E0CA]">{item}</div>
            </div>
          ))}
        </div>

        <Link
          href="/reset"
          className="mt-12 inline-flex rounded-full bg-[#C6A56B] px-8 py-4 text-sm font-semibold text-[#1B140C]"
        >
          View the Reset
        </Link>
      </div>
    </section>
  );
}
