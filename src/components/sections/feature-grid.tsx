const features = [
  {
    title: "Alignment Quiz",
    text: "Measure how closely your daily life matches healthy human biological conditions.",
  },
  {
    title: "Daily Check-ins",
    text: "Track sleep, sunlight, movement, food, hydration, stress, nature, and rhythm.",
  },
  {
    title: "Protocols",
    text: "Follow structured, ancestral-inspired protocols for real-world improvement.",
  },
  {
    title: "Journal",
    text: "Capture mood, energy, and reflection patterns across your reset journey.",
  },
  {
    title: "7-Day Reset",
    text: "Reduce overstimulation and reconnect to foundational habits fast.",
  },
  {
    title: "Human Rhythms",
    text: "Build routines aligned with circadian biology and natural recovery.",
  },
];

export function FeatureGrid() {
  return (
    <section id="system" className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-3xl">
          <div className="mb-4 text-xs uppercase tracking-[0.35em] text-[#C6A56B]">
            Core System
          </div>
          <h2 className="text-4xl font-semibold tracking-[-0.05em] text-[#F5E9D8] md:text-5xl">
            Rebuild the human baseline.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#A7957C]">
            Ayncient turns ancient biological principles into a modern product system.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-white/5 bg-white/[0.03] p-8 transition hover:border-[#C6A56B]/30 hover:bg-white/[0.05]"
            >
              <h3 className="text-xl font-semibold text-[#F3E5D1]">{feature.title}</h3>
              <p className="mt-4 leading-7 text-[#A7957C]">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
