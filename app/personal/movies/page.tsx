"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { movies } from "@/data/movies";
import type { MovieItem } from "@/data/movies";
import { useMovieData } from "@/hooks/useMovieData";

export default function MoviesPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selectedMovie, setSelectedMovie] = useState<MovieItem | null>(null);
  const selectedMovieData = useMovieData(selectedMovie);
  const [moviePosters, setMoviePosters] = useState<Record<string, string>>({});

  useEffect(() => {
    document.body.style.overflow = selectedMovie ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedMovie]);

  useEffect(() => {
    let cancelled = false;

    async function loadPosters() {
      const results = await Promise.all(
        movies.watched.map(async (movie) => {
          try {
            const response = await fetch(
              `/api/movies?title=${encodeURIComponent(movie.title)}`,
            );

            if (!response.ok) return null;

            const data = await response.json();

            if (!data.poster) return null;

            return {
              title: movie.title,
              poster: data.poster,
            };
          } catch {
            return null;
          }
        }),
      );

      if (cancelled) return;

      const posterMap: Record<string, string> = {};

      results.forEach((result) => {
        if (result) {
          posterMap[result.title] = result.poster;
        }
      });

      setMoviePosters(posterMap);
    }

    loadPosters();

    return () => {
      cancelled = true;
    };
  }, []);

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

          {/* Search + Filter */}
          <div className="mt-12 flex flex-col gap-4 md:flex-row">
            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search movies & shows..."
              className="h-14 flex-1 border border-white/10 bg-white/3 px-5 text-sm text-white outline-none placeholder:text-white/25 focus:border-white/30"
            />

            <div className="flex flex-wrap gap-2">
              {["All", "Movie", "Series", "Drama", "Anime"].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setFilter(type)}
                  className={`h-14 border px-5 text-xs uppercase tracking-[0.2em] transition ${
                    filter === type
                      ? "border-white/30 bg-white/8 text-white"
                      : "border-white/10 text-white/40 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Movie Grid */}
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5">
            {filteredMovies.map((item, index) => (
              <button
                key={`${item.title}-${index}`}
                type="button"
                onClick={() => setSelectedMovie(item)}
                className="group relative w-full overflow-hidden border border-white/10 bg-white/2 text-left transition duration-500 hover:-translate-y-1 hover:border-white/20"
              >
                <div className="relative aspect-[2/3] overflow-hidden bg-white/[0.03]">
                  {(moviePosters[item.title] ?? item.poster) ? (
                    <img
                      src={moviePosters[item.title] ?? item.poster}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-xs uppercase tracking-[0.2em] text-white/20">
                      No Poster
                    </div>
                  )}

                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-black/60 to-transparent p-5 opacity-0 transition duration-300 group-hover:opacity-100">
                    <p className="text-lg font-medium">{item.title}</p>

                    <p className="mt-1 text-xs uppercase tracking-[0.15em] text-white/50">
                      {item.meta}
                    </p>

                    {item.imdbRating !== undefined && (
                      <p className="mt-3 text-sm text-white/70">
                        IMDb {item.imdbRating}
                      </p>
                    )}

                    {item.myOpinion && (
                      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-white/60">
                        {item.myOpinion}
                      </p>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Slide 03 — Next Up */}
      {/* <section className="min-h-screen snap-start px-6 py-32">
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
                className="group grid gap-6 border-b border-white/10 py-8 transition hover:bg-white/3 md:grid-cols-[80px_1fr_auto] md:items-center"
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
      </section> */}

      {/* Movie Information Modal */}
      {selectedMovieData && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md md:p-8"
          onClick={() => setSelectedMovie(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedMovieData.title}
            className="relative h-[92vh] w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d0d] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close */}
            <button
              type="button"
              onClick={() => setSelectedMovie(null)}
              aria-label="Close"
              className="absolute right-5 top-5 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-xl text-white/60 backdrop-blur-md transition hover:bg-white/10 hover:text-white"
            >
              ×
            </button>

            {/* Cinematic Hero */}
            <section className="relative min-h-120 overflow-hidden">
              {/* Background poster */}
              {selectedMovieData.poster && (
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-50 blur-[2px]"
                  style={{
                    backgroundImage: `url(${selectedMovieData.poster})`,
                    transform: "scale(1.05)",
                  }}
                />
              )}

              {/* Dark cinematic overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/15" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/80 via-transparent to-black/10" />

              {/* Hero content */}
              <div className="relative z-10 flex min-h-120 flex-col justify-end p-6 md:p-10">
                <div className="flex flex-col gap-8 md:flex-row md:items-end">
                  {/* Poster */}
                  <div className="relative aspect-2/3 w-40 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/3 shadow-2xl md:w-48">
                    {selectedMovieData.poster ? (
                      <Image
                        src={selectedMovieData.poster}
                        alt={selectedMovieData.title ?? "Movie poster"}
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-xs uppercase tracking-[0.2em] text-white/20">
                        No Poster
                      </div>
                    )}
                  </div>

                  {/* Movie information */}
                  <div className="pb-1">
                    <p className="text-xs uppercase tracking-[0.35em] text-white/40">
                      {selectedMovieData.type}
                    </p>

                    <h2 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">
                      {selectedMovieData.title}
                    </h2>

                    <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/50">
                      {selectedMovieData.year && (
                        <span>{selectedMovieData.year}</span>
                      )}

                      {selectedMovieData.genre && (
                        <>
                          <span>·</span>
                          <span>{selectedMovieData.genre}</span>
                        </>
                      )}

                      {selectedMovieData.imdbRating !== undefined && (
                        <>
                          <span>·</span>
                          <span>IMDb {selectedMovieData.imdbRating}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Details + My Review */}
            <section className="border-t border-white/10 p-6 md:p-10">
              <div className="grid gap-12 md:grid-cols-[1.5fr_1fr]">
                {/* Details */}
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                    Details
                  </p>

                  {selectedMovieData.details && (
                    <p className="mt-6 max-w-3xl overflow-hidden text-lg leading-relaxed text-white/55 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:4] md:text-xl">
                      {selectedMovieData.details}
                    </p>
                  )}
                </div>

                {/* My Review */}
                <div className="mt-6">
                  <div className="flex gap-1 text-2xl">
                    {[1, 2, 3, 4, 5].map((star) => {
                      const rating = selectedMovieData.myRating ?? 0;

                      return (
                        <span
                          key={star}
                          className="relative inline-block leading-none"
                        >
                          <span className="text-white">★</span>

                          {rating >= star && (
                            <span className="absolute inset-0 text-blue-400">
                              ★
                            </span>
                          )}

                          {rating === star - 0.5 && (
                            <span
                              className="absolute inset-0 overflow-hidden text-blue-400"
                              style={{ width: "50%" }}
                            >
                              ★
                            </span>
                          )}
                        </span>
                      );
                    })}
                  </div>

                  {selectedMovieData.myOpinion && (
                    <p className="mt-5 max-w-md text-base leading-relaxed text-white/50">
                      “{selectedMovieData.myOpinion}”
                    </p>
                  )}
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </main>
  );
}
