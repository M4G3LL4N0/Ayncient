import { ReactNode } from "react";

interface DashboardShellProps {
  children: ReactNode;
  title?: string;
}

export function DashboardShell({ children, title }: DashboardShellProps) {
  return (
    <div className="min-h-screen bg-[#0d0f0b] text-[#f5f0e7]">
      <header className="border-b border-[#d9c7a3]/15 bg-[#11140f]/90">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 sm:px-6 lg:px-8">
          <a href="/" className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d9c7a3]">
            Ayncient
          </a>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[#a8b38f]">
              Biological alignment dashboard
            </p>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              {title ?? "Dashboard"}
            </h1>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mx-auto max-w-4xl">{children}</div>
      </main>
    </div>
  );
}
