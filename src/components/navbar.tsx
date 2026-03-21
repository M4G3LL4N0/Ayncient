import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[#0f0f0dcc]/80 backdrop-blur-xl">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="text-lg md:text-xl font-bold tracking-[0.18em]">
          AYNCIENT
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <a href="#philosophy" className="subtle text-sm hover:text-white">
            Philosophy
          </a>
          <a href="#features" className="subtle text-sm hover:text-white">
            Features
          </a>
          <Link href="/reset" className="subtle text-sm hover:text-white">
            7-Day Reset
          </Link>
          <Link href="/quiz" className="btn-primary text-sm">
            Take the Quiz
          </Link>
        </nav>

        <Link href="/quiz" className="btn-primary text-sm md:hidden">
          Quiz
        </Link>
      </div>
    </header>
  );
}
