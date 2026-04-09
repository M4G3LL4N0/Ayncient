import { redirect } from "next/navigation";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const hasSupabaseEnv =
    !!process.env.NEXT_PUBLIC_SUPABASE_URL &&
    !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!hasSupabaseEnv) {
    redirect("/");
  }

  const supabase = await createServerSupabaseClient();
  const { data: { session } } = await supabase.auth.getSession();

  if (!session) {
    redirect("/");
  }

  return (
    <DashboardShell title="Dashboard">
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
    </DashboardShell>
  );
}
