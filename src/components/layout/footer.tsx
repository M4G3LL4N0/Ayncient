export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-sm font-black tracking-[0.32em]">AYNCIENT</div>
          <p className="subtle mt-2 max-w-md text-sm">
            Human optimization through biological alignment.
          </p>
        </div>
        <div className="text-sm text-[#786a55]">Live as designed.</div>
      </div>
    </footer>
  );
}
