"use client";

import { useState } from "react";
import { music } from "@/data/music";

export default function MusicPage() {
  const songs = music.onRepeat;
  const [activeSong, setActiveSong] = useState(0);

  const currentSong = songs[activeSong] ?? music.current;

  return (
    <main className="bg-black text-white">
      {/* Slide 01 — Current */}
      <section className="min-h-screen snap-start px-6 py-16">
        <div className="mx-auto grid min-h-[calc(100vh-8rem)] w-full max-w-7xl items-center gap-16 md:grid-cols-[1fr_420px]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/30">
              Personal · Music
            </p>

            <h1 className="mt-6 text-7xl font-bold tracking-tight md:text-9xl">
              WHAT&apos;S
              <br />
              ON REPEAT.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/40">
              The music that keeps finding its way back into my life.
            </p>
          </div>

          {/* Currently Playing */}
          <div className="w-full">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-white/30">
              Currently Playing
            </p>

            <div className="border border-white/10 bg-white/[0.03] p-5">
              {/* Album Art */}
              <div className="aspect-square w-full border border-white/10 bg-black">
                <div className="flex h-full items-center justify-center">
                  <span className="text-xs uppercase tracking-[0.3em] text-white/20">
                    Album Art
                  </span>
                </div>
              </div>

              {/* Track Info */}
              <div className="mt-6">
                <p className="text-2xl font-semibold tracking-tight">
                  {music.current.title}
                </p>

                <p className="mt-1 text-sm text-white/40">
                  {music.current.artist}
                  {music.current.album && ` · ${music.current.album}`}
                </p>
              </div>

              {/* Progress */}
              <div className="mt-6">
                <div className="h-px bg-white/20">
                  <div className="h-px w-[42%] bg-white" />
                </div>

                <div className="mt-2 flex justify-between text-[10px] text-white/30">
                  <span>02:14</span>
                  <span>--:--</span>
                </div>
              </div>

              {/* Controls */}
              <div className="mt-6 flex items-center justify-center gap-8">
                <button
                  type="button"
                  className="text-white/40 transition hover:text-white"
                >
                  ↶
                </button>

                <button
                  type="button"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition hover:bg-white hover:text-black"
                >
                  ▶
                </button>

                <button
                  type="button"
                  className="text-white/40 transition hover:text-white"
                >
                  ↷
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 02 — On Repeat */}
      <section className="min-h-screen snap-start px-6 py-32">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex items-end justify-between border-b border-white/10 pb-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                Music
              </p>

              <h1 className="mt-4 text-6xl font-bold tracking-tight md:text-8xl">
                ON REPEAT.
              </h1>
            </div>

            <span className="text-xs uppercase tracking-[0.2em] text-white/25">
              {songs.length} tracks
            </span>
          </div>

          <div className="mt-8">
            {songs.length > 0 ? (
              songs.map((song, index) => {
                const active = index === activeSong;

                return (
                  <button
                    key={`${song.title}-${index}`}
                    type="button"
                    onClick={() => setActiveSong(index)}
                    className={`group grid w-full grid-cols-[50px_1fr_auto] items-center gap-6 border-b border-white/10 px-4 py-7 text-left transition md:grid-cols-[70px_1fr_100px] ${
                      active
                        ? "bg-white/[0.06]"
                        : "hover:bg-white/[0.03]"
                    }`}
                  >
                    <span className="text-sm text-white/25">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <p
                        className={`text-xl font-medium transition ${
                          active ? "text-white" : "text-white/70"
                        }`}
                      >
                        {song.title}
                      </p>

                      <p className="mt-1 text-sm text-white/30">
                        {song.artist}
                      </p>
                    </div>

                    <span className="text-xs text-white/25">
                      —
                    </span>
                  </button>
                );
              })
            ) : (
              <div className="border-b border-white/10 py-12 text-sm text-white/25">
                No songs added yet.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Slide 03 — Music Archive */}
      <section className="flex min-h-screen snap-start items-center px-6 py-32">
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-white/30">
            Archive
          </p>

          <h2 className="mt-6 max-w-4xl text-6xl font-bold tracking-tight md:text-8xl">
            MUSIC THAT
            <br />
            STAYED.
          </h2>

          <div className="mt-16">
            {music.archive.length > 0 ? (
              <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
                {music.archive.map((item, index) => (
                  <div
                    key={`${item.title}-${index}`}
                    className="bg-black p-8"
                  >
                    <p className="text-xs uppercase tracking-[0.25em] text-white/25">
                      {item.artist}
                    </p>

                    <p className="mt-6 text-2xl text-white/60">
                      {item.title}
                    </p>

                    {item.album && (
                      <p className="mt-2 text-sm text-white/30">
                        {item.album}
                      </p>
                    )}

                    {item.note && (
                      <p className="mt-4 text-sm leading-relaxed text-white/30">
                        {item.note}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="border border-white/10 p-8 text-sm text-white/25">
                Music archive coming soon.
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}