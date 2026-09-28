export default function ProjectsSection() {
  return (
    <section id="projects" className="relative z-10 min-h-[300vh] bg-black">
      {/* Project 01 */}
      <div className="sticky top-0 flex h-screen items-center justify-center bg-emerald-950">
        <div className="grid w-full max-w-7xl gap-12 px-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-white/40">
              01 — SaaS / AI
            </p>

            <h2 className="text-6xl font-bold tracking-tight md:text-8xl">
              AI APPOINTMENT SCHEDULER
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/50">
              An AI-powered scheduling platform for managing availability,
              bookings, rescheduling, cancellations, and intelligent slot
              selection.
            </p>

            <p className="mt-8 text-sm uppercase tracking-[0.2em] text-white/30">
              Next.js · TypeScript · Supabase · Gemini
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/20">
              Designed · Built · Deployed
            </p>
            <div className="mt-8">
              <a
                href="/projects"
                className="text-xs uppercase tracking-[0.25em] text-white/40 transition hover:text-white"
              >
                Explore project →
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden border border-white/10 bg-white/[0.03]">
            <div className="absolute inset-0 grid grid-cols-2 gap-px bg-white/10">
              <div className="bg-zinc-950 p-6">
                <div className="h-3 w-24 bg-white/10" />
                <div className="mt-8 space-y-3">
                  <div className="h-10 bg-white/5" />
                  <div className="h-10 bg-white/5" />
                  <div className="h-10 bg-white/5" />
                </div>
              </div>

              <div className="bg-zinc-900 p-6">
                <div className="h-3 w-20 bg-white/10" />
                <div className="mt-8 h-32 border border-white/10 bg-white/[0.03]" />
                <div className="mt-6 h-20 border border-white/10 bg-white/[0.03]" />
              </div>
            </div>

            <div className="absolute bottom-5 left-5 text-[10px] uppercase tracking-[0.25em] text-white/30">
              Scheduling Dashboard
            </div>
          </div>
        </div>
      </div>

      {/* Project 02 */}
      <div className="sticky top-0 z-20 flex h-screen items-center justify-center bg-zinc-950">
        <div className="grid w-full max-w-7xl gap-12 px-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-white/40">
              02 — AI / Multi-Agent
            </p>

            <h2 className="text-6xl font-bold tracking-tight md:text-8xl">
              PĀTHEYĀTRĀ AI
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/50">
              A multi-agent AI travel planner that researches destinations,
              weather, budgets, and itineraries through an orchestrated
              workflow.
            </p>

            <p className="mt-8 text-sm uppercase tracking-[0.2em] text-white/30">
              Python · FastAPI · Gemini · Multi-Agent AI
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/20">
              Designed · Built · Deployed
            </p>
            <div className="mt-8">
              <a
                href="/projects"
                className="text-xs uppercase tracking-[0.25em] text-white/40 transition hover:text-white"
              >
                Explore project →
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden border border-white/10 bg-white/[0.03]">
            <div className="absolute inset-0 p-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="h-3 w-28 bg-white/10" />
                <div className="h-3 w-16 bg-white/10" />
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="col-span-2 h-32 border border-white/10 bg-white/[0.03]" />
                <div className="h-32 border border-white/10 bg-white/[0.03]" />
              </div>

              <div className="mt-3 grid grid-cols-3 gap-3">
                <div className="h-20 border border-white/10 bg-white/[0.03]" />
                <div className="h-20 border border-white/10 bg-white/[0.03]" />
                <div className="h-20 border border-white/10 bg-white/[0.03]" />
              </div>

              <div className="mt-6 h-3 w-32 bg-white/10" />
            </div>

            <div className="absolute bottom-5 left-5 text-[10px] uppercase tracking-[0.25em] text-white/30">
              AI Travel Planner
            </div>
          </div>
        </div>
      </div>

      {/* Project 03 */}
      <div className="sticky top-0 z-30 flex h-screen items-center justify-center bg-red-950">
        <div className="grid w-full max-w-7xl gap-12 px-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-white/40">
              03 — Game / Info. Website
            </p>

            <h2 className="text-6xl font-bold tracking-tight md:text-8xl">
              REALM OF SIX
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/50">
              An AI-powered scheduling platform for managing availability,
              bookings, rescheduling, cancellations, and intelligent slot
              selection.
            </p>

            <p className="mt-8 text-sm uppercase tracking-[0.2em] text-white/30">
              React · TypeScript · TailwindCSS
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/20">
              Designed · Developed · Event Lead
            </p>
            <div className="mt-8">
              <a
                href="/projects"
                className="text-xs uppercase tracking-[0.25em] text-white/40 transition hover:text-white"
              >
                Explore project →
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden border border-white/10 bg-white/[0.03]">
            <div className="absolute inset-0 p-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs uppercase tracking-[0.25em] text-white/30">
                  REALM OF SIX
                </span>

                <span className="text-xs uppercase tracking-[0.2em] text-white/20">
                  LIVE EVENT
                </span>
              </div>

              <div className="mt-8 flex h-[55%] items-center justify-center border border-white/10 bg-white/[0.02]">
                <div className="text-center">
                  <div className="mx-auto h-20 w-20 rotate-45 border border-white/20" />

                  <p className="mt-8 text-xs uppercase tracking-[0.3em] text-white/30">
                    Treasure Hunt
                  </p>
                </div>
              </div>

              <div className="mt-5 flex gap-3">
                <div className="h-10 flex-1 border border-white/10 bg-white/[0.03]" />
                <div className="h-10 w-24 border border-white/10 bg-white/[0.03]" />
                <div className="h-10 w-20 border border-white/10 bg-white/[0.03]" />
              </div>
            </div>

            <div className="absolute bottom-5 left-5 text-[10px] uppercase tracking-[0.25em] text-white/30">
              Offline · Interactive · Event
            </div>
          </div>

          <div className="right-10 bottom-10 absolute flex w-full max-w-7xl justify-end px-6 md:mt-0">
            <a
              href="/projects"
              className="text-sm uppercase tracking-[0.2em] text-white/40 transition hover:text-white"
            >
              View all projects →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
