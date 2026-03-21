import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[#0f0f0d]/95 backdrop-blur">
      <div className="container flex items-center justify-between py-5">
        <Link href="/" className="text-lg font-medium tracking-[0.15em] hover:opacity-90 transition-opacity">
          <span className="text-[var(--accent)]">AYNCIENT</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#philosophy" className="text-sm hover:text-white transition-colors tracking-tight">
            Philosophy
          </a>
          <a href="#protocol" className="text-sm hover:text-white transition-colors tracking-tight">
            Protocol
          </a>
          <Link href="/quiz" className="px-5 py-2 bg-white/5 rounded-full border border-white/8 text-sm tracking-tight hover:bg-white/10 transition-colors">
            Take Alignment Quiz
          </Link>
        </nav>

        <Link href="/quiz" className="text-sm md:hidden px-4 py-2 bg-white/5 rounded-full border border-white/8">
          Quiz
        </Link>
      </div>
    </header>
  );
}
