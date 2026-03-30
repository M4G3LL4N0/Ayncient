import DashboardShell from "@/components/dashboard/dashboard-shell";
import DailyCheckinForm from "@/components/check-in/daily-checkin-form";

export default function CheckInPage() {
  return (
    <DashboardShell>
      <DailyCheckinForm />
    </DashboardShell>
  );
}
