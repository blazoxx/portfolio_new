"use client";

import { useEffect, useMemo, useState } from "react";
import { games, type GameItem } from "@/data/games";
import { useGameData } from "@/hooks/useGameData";

export default function GamesPage() {
  const [search, setSearch] = useState("");
  const [selectedGame, setSelectedGame] = useState<GameItem | null>(null);
  const selectedGameData = useGameData(selectedGame);

  useEffect(() => {
    document.body.style.overflow = selectedGame ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedGame]);

  const loadedGames = useGameData(games.played);

  const filteredGames = loadedGames.filter((game) =>
    game.title.toLowerCase().includes(search.toLowerCase()),
  );

  useEffect(() => {
    document.body.style.overflow = selectedGame ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedGame]);

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
              WORLDS
              <br />
              I GET
              <br />
              LOST IN.
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

          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/25">
            {filteredGames.length}{" "}
            {filteredGames.length === 1 ? "game" : "games"}
          </p>

          {/* Search */}
          <div className="mt-12">
            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search games..."
              className="h-14 w-full border border-white/10 bg-white/[0.03] px-5 text-sm text-white outline-none placeholder:text-white/25 focus:border-white/30 md:max-w-md"
            />
          </div>

          {/* Game Grid */}
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {filteredGames.map((game, index) => (
              <button
                key={`${game.title}-${index}`}
                type="button"
                onClick={() => setSelectedGame(game)}
                className="group relative w-full overflow-hidden border border-white/10 bg-white/[0.02] text-left transition duration-500 hover:-translate-y-1 hover:border-white/20"
              >
                <div className="relative aspect-[2/3] overflow-hidden bg-white/[0.03]">
                  <div className="relative aspect-[2/3] overflow-hidden bg-white/[0.03]">
                    {game.poster ? (
                      <img
                        src={game.poster}
                        alt={game.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center px-4 text-center text-xs uppercase tracking-[0.2em] text-white/20">
                        No Poster
                      </div>
                    )}

                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-black/70 to-transparent p-5 opacity-0 transition duration-300 group-hover:opacity-100">
                      <p className="text-lg font-medium">{game.title}</p>

                      {(game.platform || game.year) && (
                        <p className="mt-1 text-xs uppercase tracking-[0.15em] text-white/50">
                          {[game.year, game.platform]
                            .filter(Boolean)
                            .join(" · ")}
                        </p>
                      )}

                      {game.myOpinion && (
                        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-white/60">
                          {game.myOpinion}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {filteredGames.length === 0 && (
            <div className="border-t border-white/10 py-16">
              <p className="text-sm uppercase tracking-[0.2em] text-white/25">
                No games yet.
              </p>
            </div>
          )}
        </div>
      </section>

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
            Games sitting on my list.
          </p>

          <div className="mt-16 border-t border-white/10">
            {games.nextUp.map((game, index) => (
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
                    {[game.year, game.platform, game.genre]
                      .filter(Boolean)
                      .join(" · ")}
                  </p>
                </div>

                <span className="text-sm text-white/25">→</span>
              </div>
            ))}
          </div>

          {games.nextUp.length === 0 && (
            <div className="border-b border-white/10 py-8">
              <p className="text-sm uppercase tracking-[0.2em] text-white/25">
                Nothing queued yet.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Game Modal */}
      {selectedGameData && (
        <>
          <img
            src={selectedGameData.poster}
            alt={selectedGameData.title}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-8">
            <p className="mb-2 text-xs uppercase tracking-[0.25em] text-white/50">
              {selectedGameData.year}
              {selectedGameData.platform && ` · ${selectedGameData.platform}`}
            </p>

            <h2 className="text-4xl font-semibold">{selectedGameData.title}</h2>

            {selectedGameData.genre && (
              <p className="mt-2 text-sm text-white/60">
                {selectedGameData.genre}
              </p>
            )}

            {selectedGameData.myRating && (
              <div className="mt-5 text-lg">
                {"★".repeat(selectedGameData.myRating)}
                {"☆".repeat(5 - selectedGameData.myRating)}
              </div>
            )}

            {selectedGameData.myOpinion && (
              <p className="mt-4 max-w-xl text-sm italic text-white/60">
                “{selectedGameData.myOpinion}”
              </p>
            )}
          </div>
        </>
      )}
    </main>
  );
}
