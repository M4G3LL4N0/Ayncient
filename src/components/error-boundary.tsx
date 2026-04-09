"use client";

import { useEffect } from "react";

export function ErrorBoundary({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      console.error("ErrorBoundary caught:", event.error);
      // TODO: Add error reporting
    };

    window.addEventListener("error", handleError);
    return () => window.removeEventListener("error", handleError);
  }, []);

  return <>{children}</>;
}
