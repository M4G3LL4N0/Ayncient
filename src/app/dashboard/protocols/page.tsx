import { DashboardShell } from "@/components/dashboard/dashboard-shell";

export default function GeneratedPage() {
  return (
    <DashboardShell title="Protocols">
      <div className="grid gap-4">
        {[
          ["Morning Light", "Anchor circadian rhythm with outdoor sunlight before screens."],
          ["Daily Movement", "Build low-friction strength, walking, and mobility into the day."],
          ["Evening Downshift", "Protect sleep with darkness, lower stimulation, and a clean close."],
        ].map(([name, description]) => (
          <section key={name} className="rounded-xl border border-[#d9c7a3]/15 bg-[#f5f0e7]/5 p-5">
            <h2 className="text-lg font-medium">{name}</h2>
            <p className="mt-2 text-sm text-[#c8c0b0]">{description}</p>
          </section>
        ))}
      </div>
    </DashboardShell>
  );
}
