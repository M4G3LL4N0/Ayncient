import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0A0907]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-sm font-semibold tracking-[0.35em] text-[#E8D7BE]">
          AYNCIENT
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-[#BCA98A] md:flex">
          <a href="#philosophy" className="transition hover:text-white">Philosophy</a>
          <a href="#system" className="transition hover:text-white">System</a>
          <a href="#protocols" className="transition hover:text-white">Reset</a>
          <a href="#waitlist" className="transition hover:text-white">Waitlist</a>
        </nav>

        <Link
          href="/quiz"
          className="rounded-full border border-[#C6A56B]/40 bg-[#C6A56B]/10 px-5 py-2 text-sm font-medium text-[#F4DFC1] transition hover:bg-[#C6A56B]/20"
        >
          Take Quiz
        </Link>
      </div>
    </header>
  );
}
