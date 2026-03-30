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
      <main className="container mx-auto py-6 px-4 sm:py-8 sm:px-6 lg:px-8">
        {title && <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">{title}</h1>}
        <div className="mx-auto max-w-4xl">
          {children}
        </div>
      </main>
    </div>
  );
}
