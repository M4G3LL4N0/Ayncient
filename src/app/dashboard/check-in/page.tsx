import DashboardShell from "@/components/dashboard/dashboard-shell";
import DailyCheckinForm from "@/components/check-in/daily-checkin-form";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Daily Check-in',
  description: 'Track your daily wellness stats and habits',
};

export default function CheckInPage() {
  return (
    <DashboardShell title="Daily Check-in">
      <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
        <DailyCheckinForm />
      </div>
    </DashboardShell>
  );
}
