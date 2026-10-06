"use client";

import { useEffect, useMemo, useState } from "react";
import { movies } from "@/data/movies";
import type { MovieItem } from "@/data/movies";

export default function MoviesPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selectedMovie, setSelectedMovie] = useState<MovieItem | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedMovie ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedMovie]);

  const filteredMovies = useMemo(() => {
    const query = search.toLowerCase().trim();

    return movies.watched.filter((movie) => {
      const matchesSearch =
        !query || `${movie.title} ${movie.meta}`.toLowerCase().includes(query);

      const matchesFilter = filter === "All" || movie.type === filter;

      return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

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

          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/25">
            {filteredMovies.length}{" "}
            {filteredMovies.length === 1 ? "title" : "titles"}
          </p>

          {/* Search */}
          <div className="mt-12 flex flex-col gap-4 md:flex-row">
            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search movies & shows..."
              className="h-14 flex-1 border border-white/10 bg-white/[0.03] px-5 text-sm text-white outline-none placeholder:text-white/25 focus:border-white/30"
            />
            <div className="flex flex-wrap gap-2">
              {["All", "Movie", "Series", "Drama", "Anime"].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setFilter(type)}
                  className={`h-14 border px-5 text-xs uppercase tracking-[0.2em] transition ${
                    filter === type
                      ? "border-white/30 bg-white/[0.08] text-white"
                      : "border-white/10 text-white/40 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Movie / Show Grid */}
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {filteredMovies.map(
              (item: (typeof movies.watched)[number], index: number) => (
                <button
                  key={`${item.title}-${index}`}
                  type="button"
                  onClick={() => setSelectedMovie(item)}
                  className="group relative w-full overflow-hidden border border-white/10 bg-white/[0.02] text-left transition duration-500 hover:-translate-y-1 hover:border-white/20"
                >
                  <div className="aspect-[2/3] overflow-hidden bg-white/[0.03]">
                    {item.poster ? (
                      <img
                        src={item.poster}
                        alt={item.title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-xs uppercase tracking-[0.2em] text-white/20">
                        No Poster
                      </div>
                    )}
                  </div>

                  <div className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-lg font-medium">{item.title}</p>

                        <p className="mt-1 text-xs uppercase tracking-[0.15em] text-white/30">
                          {item.meta}
                        </p>
                      </div>

                      {item.favorite && (
                        <span className="text-white/60">♥</span>
                      )}
                    </div>
                  </div>
                </button>
              ),
            )}
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
            {movies.nextUp.map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className="group grid gap-6 border-b border-white/10 py-8 transition hover:bg-white/[0.03] md:grid-cols-[80px_1fr_auto] md:items-center"
              >
                <span className="text-sm text-white/25">
                  {String(index + 1).padStart(2, "0")}
                </span>
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

      {selectedMovie && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
          onClick={() => setSelectedMovie(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedMovie.title}
            className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl border border-white/10 bg-[#111] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close */}
            <button
              type="button"
              onClick={() => setSelectedMovie(null)}
              aria-label="Close"
              className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-xl text-white/70 transition hover:bg-white/10 hover:text-white"
            >
              ×
            </button>

            {/* Movie header */}
            <div className="grid gap-10 p-6 md:grid-cols-[220px_1fr] md:p-10">
              {/* Poster */}
              <div className="overflow-hidden rounded-2xl bg-white/[0.03]">
                {selectedMovie.poster ? (
                  <img
                    src={selectedMovie.poster}
                    alt={selectedMovie.title}
                    className="aspect-[2/3] h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex aspect-[2/3] items-center justify-center text-xs uppercase tracking-[0.2em] text-white/20">
                    No Poster
                  </div>
                )}
              </div>

              {/* Details */}
              <div className="flex flex-col justify-center">
                <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                  {selectedMovie.type}
                </p>

                <h2 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">
                  {selectedMovie.title}
                </h2>

                <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/40">
                  {selectedMovie.year && <span>{selectedMovie.year}</span>}

                  {selectedMovie.genre && <span>{selectedMovie.genre}</span>}

                  <span>{selectedMovie.meta}</span>

                  {selectedMovie.imdbRating !== undefined && (
                    <span>IMDb {selectedMovie.imdbRating}</span>
                  )}
                </div>

                {selectedMovie.details && (
                  <div className="mt-12">
                    <p className="text-xs uppercase tracking-[0.25em] text-white/30">
                      Details
                    </p>

                    <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/60">
                      {selectedMovie.details}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Reviews */}
            <div className="border-t border-white/10 px-6 py-10 md:px-10">
              {/* My Review */}
              <section>
                <p className="text-xs uppercase tracking-[0.25em] text-white/30">
                  My Review
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-5">
                  <span className="text-2xl tracking-widest">
                    {"★".repeat(
                      Math.min(
                        5,
                        Math.max(0, Math.round(selectedMovie.myRating ?? 0)),
                      ),
                    )}

                    <span className="text-white/10">
                      {"★".repeat(
                        Math.max(
                          0,
                          5 -
                            Math.min(
                              5,
                              Math.max(
                                0,
                                Math.round(selectedMovie.myRating ?? 0),
                              ),
                            ),
                        ),
                      )}
                    </span>
                  </span>
                </div>

                {selectedMovie.myOpinion && (
                  <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/50">
                    “{selectedMovie.myOpinion}”
                  </p>
                )}
              </section>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
