import { Moon, Sun, Footprints, Apple, Brain, Trees } from "lucide-react";

const items = [
  {
    title: "Daily Alignment Score",
    description:
      "Measure how aligned your lifestyle is with human biology across sleep, light, food, movement, stress, and routine.",
    icon: Moon,
  },
  {
    title: "Guided Protocols",
    description:
      "Follow simple routines for mornings, nights, recovery, movement, and focus.",
    icon: Sun,
  },
  {
    title: "Movement Tracking",
    description:
      "Build a more human rhythm through walking, training, mobility, and time outside.",
    icon: Footprints,
  },
  {
    title: "Food Simplicity",
    description:
      "Reduce highly processed living and return to cleaner, more grounded nutrition habits.",
    icon: Apple,
  },
  {
    title: "Stress + Recovery",
    description:
      "Lower overstimulation, improve nervous system recovery, and build calm consistency.",
    icon: Brain,
  },
  {
    title: "Nature + Rhythm",
    description:
      "Reconnect with the conditions humans evolved to thrive in: natural light, fresh air, and routine.",
    icon: Trees,
  },
];

export function FeatureGrid() {
  return (
    <section id="features" className="section-spacing">
      <div className="container">
        <div className="mb-16 max-w-3xl text-center mx-auto">
          <div className="eyebrow mb-4">What Ayncient does</div>
          <h2 className="section-title">A system for living more naturally.</h2>
          <p className="section-intro">
            Ayncient combines ancestral principles with modern tools to help you
            improve energy, mood, focus, recovery, and health.
          </p>
        </div>

        <div className="grid-auto three">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="card p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/6">
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="subtle mt-3 leading-7">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
