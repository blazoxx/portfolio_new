export default function PlaygroundPage() {
  const parts = [
    "Face",
    "Eyes",
    "Hair",
    "Hat",
    "Glasses",
    "Mouth",
    "Accessory",
    "Shape",
  ];

  const options = ["01", "02", "03", "04", "05", "06"];

  return (
    <main className="bg-black text-white">
      {/* =========================================================
          SLIDE 01 — INTRO + VISITOR BADGE
      ========================================================= */}
      <section className="min-h-screen snap-start px-6 py-16">
        <div className="mx-auto grid min-h-[calc(100vh-8rem)] w-full max-w-[1400px] items-center gap-24 md:grid-cols-[minmax(0,1fr)_620px]">
          {/* Intro */}
          <div className="max-w-5xl">
            <p className="text-xs uppercase tracking-[0.3em] text-white/30">
              Playground
            </p>

            <h1 className="mt-6 text-7xl font-bold tracking-tight md:text-9xl">
              THINGS
              <br />
              I&apos;M
              <br />
              TRYING.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/40">
              A space to draw, experiment, play, and leave something behind.
            </p>
          </div>

          {/* Visitor Badge Builder */}
          <div className="w-full">
            <p className="text-xs uppercase tracking-[0.3em] text-white/30">
              Visitor Badge
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              CREATE YOUR AVATAR.
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/40">
              Pick different pieces and build your own little visitor.
            </p>

            {/* Builder */}
            <div className="mt-10 grid h-[42vh] min-h-0 grid-cols-1 gap-5 md:grid-cols-[minmax(0,1fr)_280px]">
              {/* Avatar Preview */}
              <div className="relative flex min-h-0 items-center justify-center overflow-hidden border border-white/10 bg-black">
                <div className="flex h-40 w-40 items-center justify-center rounded-full border border-white/20 text-xs uppercase tracking-[0.2em] text-white/30">
                  Avatar
                </div>

                <p className="absolute bottom-5 left-0 right-0 text-center text-[10px] uppercase tracking-[0.25em] text-white/20">
                  Preview
                </p>
              </div>

              {/* Parts Panel */}
              <div className="custom-scrollbar min-h-0 overflow-y-auto border border-white/10 bg-white/[0.02] p-5">
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/25">
                  Customize
                </p>

                <div className="mt-5 flex flex-col">
                  {parts.map((part, index) => {
                    const opensAbove = index >= 4;

                    return (
                      <div key={part} className="group relative">
                        {/* Part Button */}
                        <button
                          type="button"
                          className="relative z-10 flex w-full items-center justify-between border border-white/10 bg-black px-4 py-4 text-left text-xs uppercase tracking-[0.15em] text-white/45 transition hover:border-white/30 hover:text-white"
                        >
                          <span>{part}</span>

                          <span className="text-white/20 transition group-hover:translate-x-1 group-hover:text-white/60">
                            →
                          </span>
                        </button>

                        {/* Options */}
                        <div
                          className={`pointer-events-none absolute left-0 z-50 w-full border border-white/10 bg-black p-4 opacity-0 shadow-2xl transition-opacity duration-150 group-hover:pointer-events-auto group-hover:opacity-100 ${
                            opensAbove ? "bottom-full" : "top-full"
                          }`}
                        >
                          <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-white/25">
                            Choose {part}
                          </p>

                          <div className="grid grid-cols-3 gap-1">
                            {options.map((option) => (
                              <button
                                key={option}
                                type="button"
                                className="aspect-square border border-white/10 bg-white/[0.03] text-[10px] text-white/30 transition hover:border-white/30 hover:bg-white/[0.06] hover:text-white"
                              >
                                {option}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="relative z-10 mt-5 flex gap-3">
              <button
                type="button"
                className="flex-1 border border-white/20 px-5 py-4 text-xs uppercase tracking-[0.2em] text-white/60 transition hover:border-white hover:text-white"
              >
                Save Badge
              </button>

              <button
                type="button"
                className="flex-1 border border-white/10 px-5 py-4 text-xs uppercase tracking-[0.2em] text-white/30 transition hover:border-white/30 hover:text-white"
              >
                Use as Cursor
              </button>
            </div>

            <p className="mt-4 text-center text-[10px] uppercase tracking-[0.2em] text-white/20">
              Saved locally in your browser
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          SLIDE 02 — DRAWING BOARD
      ========================================================= */}
      <section className="min-h-screen snap-start px-6 py-24">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                Interactive
              </p>

              <h2 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">
                DRAW SOMETHING.
              </h2>
            </div>

            <p className="hidden max-w-xs text-right text-sm leading-relaxed text-white/30 md:block">
              Leave your mark on the playground.
            </p>
          </div>

          {/* Drawing Board */}
          <div className="mt-12 aspect-[16/9] w-full border border-white/10 bg-white/[0.02]">
            <div className="flex h-full items-center justify-center">
              <p className="text-xs uppercase tracking-[0.3em] text-white/20">
                Drawing Board
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
