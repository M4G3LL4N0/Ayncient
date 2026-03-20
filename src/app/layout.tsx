import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
