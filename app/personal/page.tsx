import Link from "next/link";

const sections = [
  {
    number: "01",
    title: "Music",
    description: "What’s on repeat.",
    href: "/personal/music",
  },
  {
    number: "02",
    title: "Movies & TV",
    description: "Things worth watching.",
    href: "/personal/movies",
  },
  {
    number: "03",
    title: "Games",
    description: "Worlds I get lost in.",
    href: "/personal/games",
  },
  {
    number: "04",
    title: "Books",
    description: "Ideas I keep around.",
    href: "/personal/books",
  },
];

export default function PersonalPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-32">
      <div className="mx-auto w-full max-w-7xl">
        <p className="text-sm uppercase tracking-[0.3em] text-white/40">
          Personal
        </p>

        <h1 className="mt-6 text-7xl font-bold tracking-tight md:text-9xl">
          BEYOND
          <br />
          THE CODE.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/40">
          The things I watch, play, read, listen to, and keep coming back to.
        </p>

        <div className="mt-24 border-t border-white/10">
          {sections.map((section) => (
            <Link
              key={section.number}
              href={`/personal/${section.title
                .toLowerCase()
                .replace(" & ", "-")
                .replace(" ", "-")}`}
              className="group grid gap-6 border-b border-white/10 py-12 transition hover:bg-white/[0.03] md:grid-cols-[100px_1fr_auto] md:items-center"
            >
              <span className="text-sm text-white/25">{section.number}</span>

              <div>
                <h2 className="text-4xl font-semibold tracking-tight transition group-hover:translate-x-2 md:text-6xl">
                  {section.title}
                </h2>

                <p className="mt-3 text-sm text-white/35">
                  {section.description}
                </p>
              </div>

              <span className="text-sm text-white/25 transition group-hover:text-white">
                Explore →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
