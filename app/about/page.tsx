export default function AboutPage() {
  const sections = [
    {
      number: "01",
      label: "Who",
      title: "Who I am",
      text: "A builder interested in software, AI, and turning ideas into useful things.",
    },
    {
      number: "02",
      label: "What I build",
      title: "What I build",
      text: "Software products, AI systems, experiments, and interfaces that sit somewhere between engineering and curiosity.",
    },
    {
      number: "03",
      label: "How I work",
      title: "How I work",
      text: "Understand the problem, break it down, build the simplest useful version, and keep iterating.",
    },
    {
      number: "04",
      label: "Currently",
      title: "What I'm exploring",
      text: "Agentic AI, AI systems, research, and better ways of building software.",
    },
    {
      number: "05",
      label: "Beyond code",
      title: "There is more",
      text: "Software is only one part of the picture. Music, books, games, films, and other interests shape the person behind the code.",
    },
  ];

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
            A little more about the person building the software.
          </p>
        </header>

        <div className="border-t border-white/10">
          {sections.map((section) => (
            <section
              key={section.number}
              className="grid gap-8 border-b border-white/10 py-20 md:grid-cols-[120px_220px_1fr]"
            >
              <span className="text-sm text-white/25">
                {section.number}
              </span>

              <p className="text-xs uppercase tracking-[0.25em] text-white/30">
                {section.label}
              </p>

              <div>
                <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
                  {section.title}
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/45">
                  {section.text}
                </p>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}