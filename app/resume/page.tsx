import Link from "next/link";

const sections = [
  {
    number: "01",
    title: "EXPERIENCE",
    content: "Professional experience and things I've worked on.",
  },
  {
    number: "02",
    title: "PROJECTS",
    content: "Selected software, AI, and product work.",
  },
  {
    number: "03",
    title: "SKILLS",
    content: "Languages, frameworks, AI, and development tools.",
  },
  {
    number: "04",
    title: "ACHIEVEMENTS",
    content: "Competitions, milestones, and other highlights.",
  },
  {
    number: "05",
    title: "EDUCATION",
    content: "Academic background and relevant coursework.",
  },
  {
    number: "06",
    title: "CERTIFICATIONS",
    content: "Courses and certifications.",
  },
];

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="px-6 pb-24 pt-36">
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-white/30">
            Resume
          </p>

          <div className="mt-8 flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div>
              <h1 className="text-7xl font-bold tracking-tight md:text-9xl">
                BHAIBHAV
                <br />
                PRATAP.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/40">
                Software Engineer · AI · Builder
              </p>
            </div>

            <div className="flex gap-3">
              <Link
                href="/resume.pdf"
                target="_blank"
                className="border border-white/20 px-6 py-4 text-xs uppercase tracking-[0.2em] text-white/60 transition hover:border-white hover:text-white"
              >
                View Resume
              </Link>

              <a
                href="/resume.pdf"
                download
                className="border border-white/10 px-6 py-4 text-xs uppercase tracking-[0.2em] text-white/30 transition hover:border-white/30 hover:text-white"
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="border-y border-white/10 px-6 py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-12 md:grid-cols-[220px_1fr]">
          <p className="text-xs uppercase tracking-[0.3em] text-white/30">
            Profile
          </p>

          <p className="max-w-4xl text-2xl leading-relaxed text-white/60 md:text-4xl">
            Software engineer interested in building practical
            products, AI systems, and experiences that turn ideas
            into usable software.
          </p>
        </div>
      </section>

      {/* Resume Sections */}
      <section className="px-6 py-24">
        <div className="mx-auto w-full max-w-7xl">
          <div className="border-t border-white/10">
            {sections.map((section) => (
              <article
                key={section.number}
                className="grid gap-6 border-b border-white/10 py-12 transition hover:bg-white/[0.02] md:grid-cols-[80px_1fr_auto] md:items-center"
              >
                <span className="text-xs text-white/20">
                  {section.number}
                </span>

                <div>
                  <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
                    {section.title}
                  </h2>

                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/35">
                    {section.content}
                  </p>
                </div>

                <span className="text-sm text-white/20">
                  →
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-white/30">
            Contact
          </p>

          <h2 className="mt-6 text-5xl font-bold tracking-tight md:text-8xl">
            LET&apos;S
            <br />
            BUILD.
          </h2>

          <Link
            href="/contact"
            className="mt-10 inline-block border border-white/20 px-7 py-4 text-xs uppercase tracking-[0.2em] text-white/60 transition hover:border-white hover:text-white"
          >
            Get in touch →
          </Link>
        </div>
      </section>
    </main>
  );
}