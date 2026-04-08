export default function DashboardPage() {
  return (
    <main className="min-h-screen px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight">Dashboard</h1>
          <p className="mt-2 text-sm text-neutral-400">
            Your rituals, entries, progress, and next actions in one place.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <section className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-lg font-medium">Journal</h2>
            <p className="mt-2 text-sm text-neutral-400">
              Capture reflections and track internal patterns over time.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-lg font-medium">Check-ins</h2>
            <p className="mt-2 text-sm text-neutral-400">
              Measure consistency, energy, clarity, and momentum.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-lg font-medium">Practices</h2>
            <p className="mt-2 text-sm text-neutral-400">
              Build repeatable rituals for strength, calm, and alignment.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
