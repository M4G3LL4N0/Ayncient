import type { Metadata } from "next";
import "./globals.css";
import { SupabaseProvider } from "@/lib/supabase-provider";

export const metadata: Metadata = {
  title: "Ayncient — Live as designed.",
  description:
    "Ayncient helps you realign your life with human biology through better sleep, food, movement, light, stress, and daily rhythms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-w-[320px] overflow-x-hidden">
        <SupabaseProvider>{children}</SupabaseProvider>
      </body>
    </html>
  );
}
