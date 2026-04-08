export default function DashboardJournalPage() {
  return (
    <main className="min-h-screen px-6 py-10">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight">Journal</h1>
          <p className="mt-2 text-sm text-neutral-400">
            Capture reflections, track patterns, and build consistency.
          </p>
        </div>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h2 className="text-xl font-medium">Daily Entry</h2>
          <p className="mt-2 text-sm text-neutral-400">
            This page is now restored as a valid module so the dashboard route can build.
          </p>

          <div className="mt-6 grid gap-4">
            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <p className="text-sm font-medium">Morning intention</p>
              <textarea 
                className="mt-2 w-full bg-transparent text-sm text-neutral-400 focus:outline-none"
                placeholder="What energy do you want to bring into today?"
                rows={3}
              />
            </div>

            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <p className="text-sm font-medium">Midday reflection</p>
              <textarea
                className="mt-2 w-full bg-transparent text-sm text-neutral-400 focus:outline-none"
                placeholder="What felt aligned, grounded, or energizing?"
                rows={3}
              />
            </div>

            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <p className="text-sm font-medium">Evening close</p>
              <textarea
                className="mt-2 w-full bg-transparent text-sm text-neutral-400 focus:outline-none"
                placeholder="What do you want to remember, release, or repeat tomorrow?"
                rows={3}
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
