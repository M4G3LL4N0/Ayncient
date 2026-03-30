import DashboardShell from "@/components/dashboard/dashboard-shell";
import DailyCheckinForm from "@/components/check-in/daily-checkin-form";

export default function CheckInPage() {
  return (
    <DashboardShell title="Daily Check-in">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <DailyCheckinForm />
      </div>
    </DashboardShell>
  );
}
