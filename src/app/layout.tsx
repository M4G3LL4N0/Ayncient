import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ayncient — Live as designed.",
  description:
    "Ayncient helps modern humans realign with sleep, sunlight, movement, food, nature, rhythm, and recovery.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
