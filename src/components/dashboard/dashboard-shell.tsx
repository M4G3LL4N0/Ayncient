import { ReactNode } from "react";
import DashboardHeader from "./dashboard-header";

interface DashboardShellProps {
  children: ReactNode;
  title?: string;
}

export default function DashboardShell({ children, title }: DashboardShellProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <main className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {title && <h1 className="text-3xl font-bold mb-8">{title}</h1>}
        {children}
      </main>
    </div>
  );
}
