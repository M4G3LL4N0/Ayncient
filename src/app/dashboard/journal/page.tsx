import { DashboardShell } from "@/components/dashboard/dashboard-shell";

export default function DashboardJournalPage() {
  return (
    <DashboardShell title="Journal">
      <section className="rounded-2xl border border-[#d9c7a3]/15 bg-[#f5f0e7]/5 p-6 backdrop-blur">
        <h2 className="text-xl font-medium">Daily Entry</h2>
        <p className="mt-2 text-sm text-[#c8c0b0]">
          Capture reflections, track patterns, and build consistency.
        </p>

        <div className="mt-6 grid gap-4">
          <div className="rounded-xl border border-[#d9c7a3]/15 bg-black/20 p-4">
            <p className="text-sm font-medium">Morning intention</p>
            <textarea
              className="mt-2 w-full bg-transparent text-sm text-[#c8c0b0] focus:outline-none"
              placeholder="What energy do you want to bring into today?"
              rows={3}
            />
          </div>

          <div className="rounded-xl border border-[#d9c7a3]/15 bg-black/20 p-4">
            <p className="text-sm font-medium">Midday reflection</p>
            <textarea
              className="mt-2 w-full bg-transparent text-sm text-[#c8c0b0] focus:outline-none"
              placeholder="What felt aligned, grounded, or energizing?"
              rows={3}
            />
          </div>

          <div className="rounded-xl border border-[#d9c7a3]/15 bg-black/20 p-4">
            <p className="text-sm font-medium">Evening close</p>
            <textarea
              className="mt-2 w-full bg-transparent text-sm text-[#c8c0b0] focus:outline-none"
              placeholder="What do you want to remember, release, or repeat tomorrow?"
              rows={3}
            />
          </div>
        </div>
      </section>
    </DashboardShell>
  );
}
