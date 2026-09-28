export default function ProjectsSection() {
  return (
    <section id="projects" className="relative z-10 min-h-[300vh] bg-black">
      {/* Project 01 */}
      <div className="sticky top-0 flex h-screen items-center justify-center bg-zinc-900">
        <div className="grid w-full max-w-7xl gap-12 px-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-white/40">
            02 — SaaS / AI
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
        </div>
        <div className="aspect-[4/3] w-full border border-white/10 bg-white/[0.03]" />
      </div>

      {/* Project 02 */}
      <div className="sticky top-0 z-20 flex h-screen items-center justify-center bg-zinc-800">
        <div className="grid w-full max-w-7xl gap-12 px-6 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-white/40">
            01 — AI / Multi-Agent
          </p>
          <h2 className="text-6xl font-bold tracking-tight md:text-8xl">
            PĀTHEYĀTRĀ AI
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/50">
            A multi-agent AI travel planner that researches destinations,
            weather, budgets, and itineraries through an orchestrated workflow.
          </p>
          <p className="mt-8 text-sm uppercase tracking-[0.2em] text-white/30">
            Python · FastAPI · Gemini · Multi-Agent AI
          </p>
        </div>
        <div className="aspect-[4/3] w-full border border-white/10 bg-white/[0.03]" />
      </div>

      {/* Project 03 */}
      <div className="sticky top-0 z-30 flex h-screen items-center justify-center bg-emerald-950">
        <div className="grid w-full max-w-7xl gap-12 px-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/40">
            Project 03
          </p>
          <h2 className="text-7xl font-bold">REALM OF SIX</h2>
        </div>
        <div className="aspect-[4/3] w-full border border-white/10 bg-white/[0.03]" />
      </div>
    </section>
  );
}
