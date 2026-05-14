const features = [
  ["Alignment Quiz", "Score your life across sleep, sunlight, movement, food, hydration, stress, nature, connection, and rhythm."],
  ["Daily Check-ins", "Track small daily inputs that compound into better energy, clarity, and recovery."],
  ["Protocols", "Follow structured routines for morning light, digital sunset, sleep reset, movement, and nutrition."],
  ["Journal", "Capture mood, energy, reflection, and patterns while you rebuild your baseline."],
  ["7-Day Reset", "A short guided reset for reducing overstimulation and restoring foundational habits."],
  ["Dashboard", "A simple operating panel for seeing where your life is aligned and where it is drifting."],
];

export function FeatureGrid() {
  return (
    <section id="system" className="py-24">
      <div className="container">
        <div className="mb-12 max-w-3xl">
          <div className="eyebrow mb-5">Core System</div>
          <h2 className="text-4xl font-black leading-tight tracking-[-.05em] md:text-6xl">
            Rebuild the human baseline.
          </h2>
          <p className="subtle mt-5 text-lg leading-8">
            Ayncient makes the basics visible, measurable, and easier to restore.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {features.map(([title, text]) => (
            <div key={title} className="card p-7">
              <h3 className="text-xl font-black">{title}</h3>
              <p className="subtle mt-4 leading-7">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
