export function Footer() {
  return (
    <footer className="border-t border-white/8 py-10">
      <div className="container flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-sm font-semibold tracking-[0.18em]">AYNCIENT</div>
          <p className="subtle mt-2 max-w-md text-sm">
            Human optimization through biological alignment.
          </p>
        </div>
        <div className="subtle text-sm">Live as designed.</div>
      </div>
    </footer>
  );
}
