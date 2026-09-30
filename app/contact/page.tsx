export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-32">
      <div className="mx-auto flex min-h-[70vh] w-full max-w-7xl flex-col justify-center">
        <p className="text-sm uppercase tracking-[0.3em] text-white/40">
          Contact
        </p>

        <h1 className="mt-6 text-7xl font-bold tracking-tight md:text-9xl">
          LET&apos;S
          <br />
          BUILD
          <br />
          SOMETHING.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/40">
          Have an interesting problem, project, research idea, or
          opportunity? Let&apos;s talk.
        </p>

        <div className="mt-12 flex flex-wrap gap-8 text-sm uppercase tracking-[0.2em]">
          <a
            href="mailto:your@email.com"
            className="text-white/50 transition hover:text-white"
          >
            Email →
          </a>

          <a
            href="#"
            className="text-white/50 transition hover:text-white"
          >
            GitHub →
          </a>

          <a
            href="#"
            className="text-white/50 transition hover:text-white"
          >
            LinkedIn →
          </a>
        </div>

        <div className="mt-20 border-t border-white/10 pt-6">
          <p className="text-xs uppercase tracking-[0.25em] text-white/20">
            Open to opportunities · collaborations · interesting problems
          </p>
        </div>
      </div>
    </main>
  );
}