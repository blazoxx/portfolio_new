export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-12">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-2xl font-bold tracking-[0.2em]">
            CASII
          </p>

          <p className="mt-2 text-sm text-white/40">
            Software Engineer · AI · Builder
          </p>
        </div>

        <div className="flex gap-6 text-xs uppercase tracking-[0.2em] text-white/40">
          <span>© 2026</span>
          <span>Built with Next.js</span>
        </div>
      </div>
    </footer>
  );
}