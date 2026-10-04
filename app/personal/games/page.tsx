"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { games } from "@/data/games";

export default function GamesPage() {
  const [search, setSearch] = useState("");

  const filteredGames = useMemo(() => {
    const query = search.toLowerCase().trim();

    if (!query) return games.played;

    return games.played.filter((game) =>
      `${game.title} ${game.platform ?? ""} ${game.year ?? ""}`
        .toLowerCase()
        .includes(query),
    );
  }, [search]);

  return (
    <main className="bg-black text-white">
      {/* Slide 01 — Featured */}
      <section className="min-h-screen snap-start px-6 py-16">
        <div className="mx-auto flex min-h-[calc(100vh-8rem)] w-full max-w-7xl items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/30">
              Personal · Games
            </p>

            <h1 className="mt-6 text-7xl font-bold tracking-tight md:text-9xl">
              GAMES
              <br />I PLAY.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/40">
              Games I&apos;ve played, enjoyed, and kept coming back to.
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

          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search games..."
            className="mt-12 h-14 w-full border border-white/10 bg-white/[0.03] px-5 text-sm text-white outline-none placeholder:text-white/25 focus:border-white/30 md:max-w-md"
          />

          <div className="mt-16 border-t border-white/10">
            {filteredGames.length > 0 ? (
              filteredGames.map(
                (game: (typeof games.played)[number], index: number) => (
                  <div
                    key={`${game.title}-${index}`}
                    className="group grid gap-6 border-b border-white/10 py-8 transition hover:bg-white/[0.03] md:grid-cols-[80px_1fr_auto] md:items-center"
                  >
                    <span className="text-sm text-white/25">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3 className="text-2xl font-medium tracking-tight transition group-hover:translate-x-2 md:text-4xl">
                        {game.title}
                      </h3>

                      <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/30">
                        {[game.platform, game.year].filter(Boolean).join(" · ")}
                      </p>
                    </div>

                    {game.note && (
                      <p className="max-w-sm text-sm text-white/30">
                        {game.note}
                      </p>
                    )}
                  </div>
                ),
              )
            ) : (
              <div className="py-12 text-sm text-white/25">No games found.</div>
            )}
          </div>
        </div>
      </section>

      {/* Slide 03 — Next Up */}
      <section className="flex min-h-screen snap-start items-center px-6 py-32">
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-white/30">
            Queue
          </p>

          <h2 className="mt-6 text-6xl font-bold tracking-tight md:text-8xl">
            NEXT UP.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/40">
            Games waiting for their turn.
          </p>

          <div className="mt-16 border-t border-white/10">
            {games.nextUp.length > 0 ? (
              games.nextUp.map((game, index) => (
                <div
                  key={`${game.title}-${index}`}
                  className="group grid gap-6 border-b border-white/10 py-8 transition hover:bg-white/[0.03] md:grid-cols-[80px_1fr_auto] md:items-center"
                >
                  <span className="text-sm text-white/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="text-2xl font-medium tracking-tight transition group-hover:translate-x-2 md:text-4xl">
                      {game.title}
                    </h3>

                    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/30">
                      {[game.platform, game.year].filter(Boolean).join(" · ")}
                    </p>
                  </div>

                  <span className="text-sm text-white/25">→</span>
                </div>
              ))
            ) : (
              <div className="py-12 text-sm text-white/25">
                Nothing queued yet.
              </div>
            )}
          </div>

          <Link
            href="/personal"
            className="mt-12 inline-block text-sm text-white/35 transition hover:text-white"
          >
            ← Back to Personal
          </Link>
        </div>
      </section>
    </main>
  );
}
