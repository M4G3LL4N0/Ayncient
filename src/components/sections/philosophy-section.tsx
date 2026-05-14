export function PhilosophySection() {
  return (
    <section id="philosophy" className="border-y border-white/5 bg-[#11100c]/70 py-24">
      <div className="container grid gap-12 md:grid-cols-2">
        <div>
          <div className="eyebrow mb-5">Philosophy</div>
          <h2 className="text-4xl font-black leading-tight tracking-[-.05em] md:text-6xl">
            Modern life is biologically misaligned.
          </h2>
        </div>

        <div className="space-y-5 text-lg leading-8 text-[#b9a68a]">
          <p>
            Humans evolved outdoors, in motion, connected to light, food, tribe, weather,
            sleep pressure, and natural daily rhythms.
          </p>
          <p>
            Today most people live indoors, under artificial light, overstimulated, sedentary,
            sleep deprived, overfed, under-recovered, and disconnected from nature.
          </p>
          <p>
            Ayncient turns ancestral principles into a modern system for daily alignment.
          </p>
        </div>
      </div>
    </section>
  );
}
