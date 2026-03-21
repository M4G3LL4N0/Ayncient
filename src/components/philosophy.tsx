export function Philosophy() {
  return (
    <section id="philosophy" className="py-32 md:py-44">
      <div className="container grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div className="card glass p-10 backdrop-blur-sm">
          <div className="eyebrow mb-5 opacity-80">THE PROBLEM</div>
          <h2 className="section-title max-w-xl text-balance">
            Your biology wasn't designed for this.
          </h2>
          <div className="prose prose-invert mt-8 max-w-xl space-y-5 text-lg leading-[1.75]">
            <p>
              Artificial lighting, processed foods, sedentary routines, digital overload — 
              while technologically advanced, modern life conflicts with evolutionary biology.
            </p>
            <p>
              The result? Poor sleep, chronic stress, metabolic dysfunction, 
              and depleted cognitive performance.
            </p>
          </div>
        </div>

        <div className="card glass p-10 backdrop-blur-sm">
          <div className="eyebrow mb-5 opacity-80">OUR APPROACH</div>
          <h2 className="section-title max-w-xl text-balance">
            Align with your human design.
          </h2>
          <div className="prose prose-invert mt-8 max-w-xl space-y-5 text-lg leading-[1.75]">
            <p>
              We help you systematically rebuild your foundations through sleep hygiene, 
              circadian alignment, natural movement, whole foods, stress resilience, 
              and intentional digital use.
            </p>
            <p>
              Not by rejecting modernity, but by strategically engaging with it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
