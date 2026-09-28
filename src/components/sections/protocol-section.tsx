import Link from "next/link";

export function ProtocolSection() {
  return (
    <section id="reset" className="border-y border-white/5 bg-[#11100c]/70 py-24">
      <div className="container">
        <div className="max-w-3xl">
          <div className="eyebrow mb-5">7-Day Reset</div>
          <h2 className="text-4xl font-black leading-tight tracking-[-.05em] md:text-6xl">
            Interrupt overstimulation. Restore alignment.
          </h2>
          <p className="subtle mt-6 text-lg leading-8">
            A guided reset across sleep, sunlight, movement, food, hydration, stress,
            nature, and digital reduction. This is a habit frame, not medical advice.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {["Morning light", "Digital sunset", "Sleep rhythm", "Nature walk", "Protein first", "Stress downshift"].map((item) => (
            <div key={item} className="rounded-3xl border border-white/8 bg-black/20 p-6 text-lg font-bold">
              {item}
            </div>
          ))}
        </div>

        <Link href="/reset" className="btn-primary mt-10">
          View Reset
        </Link>
      </div>
    </section>
  );
}
