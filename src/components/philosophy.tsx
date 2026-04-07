export function Philosophy() {
  return (
    <section id="philosophy" className="py-20 md:py-24 lg:py-28">
      <div className="container grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div className="card glass p-8 md:p-10 backdrop-blur-sm">
          <div className="eyebrow mb-5 opacity-80">THE PROBLEM</div>
          <h2 className="section-title max-w-xl text-balance">
            Your biology wasn't designed for this.
          </h2>
          <div className="prose prose-invert mt-8 max-w-xl space-y-5 text-lg leading-relaxed">
            <p>
              Artificial lighting, processed foods, sedentary routines, digital overload — 
              while technologically advanced, modern life conflicts with evolutionary biology.
            </p>
            <p>
              The result? Poor sleep, chronic stress, metabolic dysfunction, 
              and depleted cognitive performance.
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-white/10">
            <a href="#features" className="btn-secondary w-full">
              See How It Works
            </a>
          </div>
        </div>

        <div className="card glass p-8 md:p-10 backdrop-blur-sm">
          <div className="eyebrow mb-5 opacity-80">OUR APPROACH</div>
          <h2 className="section-title max-w-xl text-balance">
            Align with your human design.
          </h2>
          <div className="prose prose-invert mt-8 max-w-xl space-y-5 text-lg leading-relaxed">
            <p>
              We help you systematically rebuild your foundations through sleep hygiene, 
              circadian alignment, natural movement, whole foods, stress resilience, 
              and intentional digital use.
            </p>
            <p>
              Not by rejecting modernity, but by strategically engaging with it.
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-white/10">
            <a href="/quiz" className="btn-primary w-full">
              Get Your Score
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
