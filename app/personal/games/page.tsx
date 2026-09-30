const games = [
  {
    number: "01",
    title: "Game One",
    meta: "2026 · PlayStation",
    status: "Completed",
  },
  {
    number: "02",
    title: "Game Two",
    meta: "2025 · PC",
    status: "Playing",
  },
  {
    number: "03",
    title: "Game Three",
    meta: "2024 · PlayStation",
    status: "Completed",
  },
  {
    number: "04",
    title: "Game Four",
    meta: "2023 · PC",
    status: "Completed",
  },
];

export default function GamesPage() {
  return (
    <main className="bg-black text-white">
      {/* Slide 01 — Featured */}
      <section className="min-h-screen snap-start px-6 py-16">
        <div className="mx-auto flex min-h-[calc(100vh-8rem)] w-full max-w-7xl items-center">
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.3em] text-white/30">
              Personal · Games
            </p>

            <h1 className="mt-6 text-7xl font-bold tracking-tight md:text-9xl">
              WORLDS
              <br />
              I GET
              <br />
              LOST IN.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/40">
              Games I&apos;ve played, worlds I&apos;ve explored, and
              experiences that stayed with me.
            </p>
          </div>
        </div>
      </section>

      {/* Slide 02 — Played */}
      <section className="min-h-screen snap-start px-6 py-32">
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-white/30">
            Archive
          </p>

          <h2 className="mt-6 text-6xl font-bold tracking-tight md:text-8xl">
            PLAYED.
          </h2>

          {/* Search / Filter */}
          <div className="mt-12 flex flex-col gap-4 md:flex-row">
            <input
              type="text"
              placeholder="Search games..."
              className="h-14 flex-1 border border-white/10 bg-white/[0.03] px-5 text-sm text-white outline-none placeholder:text-white/25 focus:border-white/30"
            />

            <button
              type="button"
              className="h-14 border border-white/10 px-6 text-xs uppercase tracking-[0.2em] text-white/50 transition hover:border-white/30 hover:text-white"
            >
              Filter
            </button>
          </div>

          {/* Game Grid */}
          <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
            {games.map((game) => (
              <div key={game.number} className="group">
                {/* Cover */}
                <div className="aspect-[3/4] overflow-hidden border border-white/10 bg-white/[0.03] transition-transform duration-300 group-hover:-translate-y-2">
                  <div className="flex h-full items-center justify-center">
                    <span className="text-xs uppercase tracking-[0.2em] text-white/20">
                      Game Cover
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="mt-5">
                  <h3 className="text-xl font-medium tracking-tight">
                    {game.title}
                  </h3>

                  <p className="mt-2 text-xs uppercase tracking-[0.15em] text-white/30">
                    {game.meta}
                  </p>

                  <p className="mt-3 text-sm text-white/40">
                    {game.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}