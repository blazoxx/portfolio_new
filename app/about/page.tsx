import { about } from "@/data/about";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-32">
      <div className="mx-auto w-full max-w-7xl">
        <header className="min-h-[70vh] flex flex-col justify-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/40">
            About
          </p>

          <h1 className="mt-6 max-w-6xl text-7xl font-bold tracking-tight md:text-9xl">
            MORE THAN
            <br />
            THE CODE.
          </h1>

          <p className="mt-10 max-w-2xl text-xl leading-relaxed text-white/50">
            {about.intro}
          </p>
        </header>

        <div className="border-t border-white/10">
          {about.sections.map((section, index) => (
            <section
              key={section.label}
              className="grid gap-8 border-b border-white/10 py-20 transition duration-500 hover:bg-white/[0.02] md:grid-cols-[120px_220px_1fr]"
            >
              <span className="text-sm text-white/25">
                {String(index + 1).padStart(2, "0")}
              </span>

              <p className="text-xs uppercase tracking-[0.25em] text-white/30">
                {section.label}
              </p>

              <div>
                <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
                  {section.title}
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/45">
                  {section.content}
                </p>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
