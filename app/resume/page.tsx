export default function ResumePage() {
  return (
    <main className="min-h-screen bg-black px-6 py-32">
      <div className="mx-auto flex min-h-[70vh] w-full max-w-7xl flex-col justify-center">
        <p className="text-sm uppercase tracking-[0.3em] text-white/40">
          Resume
        </p>

        <h1 className="mt-6 text-7xl font-bold tracking-tight md:text-9xl">
          THE
          <br />
          SHORT
          <br />
          VERSION.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/40">
          A concise overview of my experience, projects, technical
          skills, and achievements.
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white px-6 py-4 text-sm font-medium uppercase tracking-[0.2em] text-black transition hover:bg-white/80"
          >
            View Resume
            <span>↗</span>
          </a>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-3 border border-white/20 px-6 py-4 text-sm uppercase tracking-[0.2em] text-white/60 transition hover:border-white hover:text-white"
          >
            Download PDF
            <span>↓</span>
          </a>
        </div>

        <div className="mt-20 grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
          <div className="bg-black p-8">
            <p className="text-xs uppercase tracking-[0.25em] text-white/25">
              Focus
            </p>

            <p className="mt-5 text-xl text-white/60">
              Software · AI · Systems
            </p>
          </div>

          <div className="bg-black p-8">
            <p className="text-xs uppercase tracking-[0.25em] text-white/25">
              Education
            </p>

            <p className="mt-5 text-xl text-white/60">
              B.Tech · Computer Science
            </p>
          </div>

          <div className="bg-black p-8">
            <p className="text-xs uppercase tracking-[0.25em] text-white/25">
              Status
            </p>

            <p className="mt-5 text-xl text-white/60">
              Open to opportunities
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}