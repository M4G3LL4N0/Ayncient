export function PhilosophySection() {
  return (
    <section id="philosophy" className="border-t border-white/5 bg-[#0D0C09] py-28">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2">
        <div>
          <div className="mb-4 text-xs uppercase tracking-[0.35em] text-[#C6A56B]">
            Philosophy
          </div>
          <h2 className="text-4xl font-semibold tracking-[-0.05em] text-[#F5E9D8] md:text-5xl">
            Modern life is biologically misaligned.
          </h2>
        </div>

        <div className="space-y-6 text-lg leading-8 text-[#A7957C]">
          <p>
            Humans evolved outdoors, in motion, connected to sunlight, community,
            natural food, and consistent daily rhythms.
          </p>
          <p>
            Today we live indoors, under artificial light, overstimulated, sedentary,
            sleep deprived, disconnected, and chronically stressed.
          </p>
          <p>
            Ayncient is a practical system for returning to the biological conditions
            that made humans resilient in the first place.
          </p>
        </div>
      </div>
    </section>
  );
}
