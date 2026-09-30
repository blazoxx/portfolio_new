export default function PlaygroundPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-32">
      <div className="mx-auto flex min-h-[70vh] w-full max-w-7xl flex-col justify-center">
        <p className="text-sm uppercase tracking-[0.3em] text-white/40">
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
          Experiments, unfinished ideas, strange interfaces, and
          things that exist mostly because I wanted to see if they
          could work.
        </p>

        <div className="mt-16 grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
          <div className="bg-black p-8">
            <p className="text-xs uppercase tracking-[0.25em] text-white/25">
              Experiments
            </p>

            <p className="mt-5 text-xl text-white/60">
              Small ideas
            </p>
          </div>

          <div className="bg-black p-8">
            <p className="text-xs uppercase tracking-[0.25em] text-white/25">
              Research
            </p>

            <p className="mt-5 text-xl text-white/60">
              Things I&apos;m investigating
            </p>
          </div>

          <div className="bg-black p-8">
            <p className="text-xs uppercase tracking-[0.25em] text-white/25">
              Weird
            </p>

            <p className="mt-5 text-xl text-white/60">
              Probably unnecessary
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}