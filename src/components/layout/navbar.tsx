import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#080705]/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-sm font-black tracking-[0.36em] text-[#f6ead8]">
          AYNCIENT
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-[#b9a68a] md:flex">
          <a href="#philosophy" className="hover:text-white">Philosophy</a>
          <a href="#system" className="hover:text-white">System</a>
          <a href="#reset" className="hover:text-white">Reset</a>
          <Link href="/dashboard" className="hover:text-white">Dashboard</Link>
        </nav>

        <Link href="/quiz" className="btn-primary min-h-10 px-5 text-sm">
          Take Quiz
        </Link>
      </div>
    </header>
  );
}
