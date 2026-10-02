const watchlist = [
  {
    number: "01",
    title: "Movie / Show One",
    meta: "2026 · Drama",
    favorite: true,
  },
  {
    number: "02",
    title: "Movie / Show Two",
    meta: "2025 · Sci-Fi",
    favorite: true,
  },
  {
    number: "03",
    title: "Movie / Show Three",
    meta: "2024 · Thriller",
    favorite: true,
  },
  {
    number: "04",
    title: "Movie / Show Four",
    meta: "2023 · Animation",
    favorite: false,
  },
];

export default function MoviesPage() {
  return (
    <main className="bg-black text-white">
      {/* Slide 01 — Featured */}
      <section className="min-h-screen snap-start px-6 py-16">
        <div className="mx-auto flex min-h-[calc(100vh-8rem)] w-full max-w-7xl items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/30">
              Personal · Movies & TV
            </p>

            <h1 className="mt-6 text-7xl font-bold tracking-tight md:text-9xl">
              THINGS
              <br />
              WORTH
              <br />
              WATCHING.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/40">
              Movies and shows that stayed with me.
            </p>
          </div>
          {/* Currently Watching */}
          {/* soon... */}
        </div>
      </section>

      {/* Slide 02 — Watched */}
      <section className="min-h-screen snap-start px-6 py-32">
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-white/30">
            Archive
          </p>

          <h2 className="mt-6 text-6xl font-bold tracking-tight md:text-8xl">
            WATCHED.
          </h2>

          {/* Search */}
          <div className="mt-12 flex flex-col gap-4 md:flex-row">
            <input
              type="text"
              placeholder="Search movies & shows..."
              className="h-14 flex-1 border border-white/10 bg-white/[0.03] px-5 text-sm text-white outline-none placeholder:text-white/25 focus:border-white/30"
            />

            <button
              type="button"
              className="h-14 border border-white/10 px-6 text-xs uppercase tracking-[0.2em] text-white/50 transition hover:border-white/30 hover:text-white"
            >
              Filter
            </button>
          </div>

          {/* Movie / Show Grid */}
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {watchlist.map((item) => (
              <div
                key={item.number}
                className="group relative aspect-[3/4] overflow-hidden border border-white/10 bg-white/[0.03]"
              >
                {/* Poster */}
                <div className="absolute inset-0 bg-white/[0.03]" />

                {/* Heart */}
                {item.favorite && (
                  <span
                    aria-label="Favorite"
                    className="absolute right-5 top-5 z-30 text-4xl leading-none text-red-500"
                  >
                    ♥
                  </span>
                )}

                {/* Default title */}
                <div className="absolute inset-0 flex items-end p-5 transition-opacity duration-200 group-hover:opacity-0">
                  <h3 className="text-xl font-medium tracking-tight">
                    {item.title}
                  </h3>
                </div>

                {/* Hover details */}
                <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-full bg-gradient-to-t from-black/95 via-black/80 to-transparent px-5 pb-5 pt-10 transition-transform duration-300 group-hover:translate-y-0">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                    {item.meta}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold">{item.title}</h3>

                  <p className="mt-4 text-sm leading-relaxed text-white/60">
                    My opinion about this movie or show will go here.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slide 03 — Favorites */}
      {/* <section className="min-h-screen snap-start px-6 py-32">
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-white/30">
            Archive
          </p>

          <h2 className="mt-6 text-6xl font-bold tracking-tight md:text-8xl">
            FAVORITES.
          </h2>

          <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="aspect-[2/3] border border-white/10 bg-white/[0.03]"
              />
            ))}
          </div>
        </div>
      </section> */}

      {/* Slide 03 — Next Up */}
      <section className="min-h-screen snap-start px-6 py-32">
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-white/30">
            Queue
          </p>

          <h2 className="mt-6 text-6xl font-bold tracking-tight md:text-8xl">
            NEXT UP.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/40">
            Things sitting on my watchlist.
          </p>

          <div className="mt-16 border-t border-white/10">
            {[
              {
                number: "01",
                title: "Movie / Show One",
                meta: "2026 · Drama",
              },
              {
                number: "02",
                title: "Movie / Show Two",
                meta: "2025 · Sci-Fi",
              },
              {
                number: "03",
                title: "Movie / Show Three",
                meta: "2024 · Thriller",
              },
              {
                number: "04",
                title: "Movie / Show Four",
                meta: "2023 · Animation",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="group grid gap-6 border-b border-white/10 py-8 transition hover:bg-white/[0.03] md:grid-cols-[80px_1fr_auto] md:items-center"
              >
                <span className="text-sm text-white/25">{item.number}</span>

                <div>
                  <h3 className="text-2xl font-medium tracking-tight transition group-hover:translate-x-2 md:text-4xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/30">
                    {item.meta}
                  </p>
                </div>

                <span className="text-sm text-white/25">→</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </main>
  );
}
