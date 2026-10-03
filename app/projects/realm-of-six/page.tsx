import { projects } from "@/data/projects";
import ProjectCaseStudy from "@/components/projects/ProjectCaseStudy";

export default function RealmOfSixPage() {
  const project = projects.find((item) => item.id === "realm-of-six");

  if (!project) {
    return null;
  }

  const sections = [
    {
      id: "overview",
      label: "Overview",
      eyebrow: "01 / Overview",
      title: "A treasure hunt built as a living quest.",
      content: (
        <p>
          Treasure Hunt – The Winter Is Coming was a two-day, Game of
          Thrones–inspired campus treasure hunt created for ENYUGMA, the annual
          techno-cultural fest of IIIT Bhagalpur. The experience combined
          riddles, puzzles, clues, strategy, teamwork, and campus-wide
          exploration.
        </p>
      ),
    },

    {
      id: "experience",
      label: "The Experience",
      eyebrow: "02 / Experience",
      title: "Story, competition, and exploration.",
      content: (
        <p>
          Participants competed as houses from the Game of Thrones universe and
          progressed through increasingly challenging rounds. Each stage tested
          different combinations of logic, observation, collaboration,
          decision-making, and speed.
        </p>
      ),
    },

    {
      id: "structure",
      label: "Event Structure",
      eyebrow: "03 / Structure",
      title: "Four primary rounds across two days.",
      content: (
        <div className="space-y-5">
          <p>
            The event ran for two days, with approximately six hours of gameplay
            each day.
          </p>

          <p>
            The competition consisted of four primary rounds. Round 3 and the
            final round were each divided into three internal stages, creating a
            progressively narrowing path toward the final result.
          </p>

          <p>
            House Stark ultimately claimed victory after two days of gameplay.
          </p>
        </div>
      ),
    },

    {
      id: "website",
      label: "Website",
      eyebrow: "04 / Website",
      title: "The digital layer behind the hunt.",
      content: (
        <p>
          A dedicated website was created to support the event&apos;s digital
          requirements and provide a technological layer for the treasure hunt
          experience. It helped connect the event&apos;s theme and gameplay
          through an interactive web experience.
        </p>
      ),
    },

    {
      id: "tech",
      label: "Tech Stack",
      eyebrow: "05 / Stack",
      title: "A modern Next.js application.",
      content: (
        <div className="flex flex-wrap gap-3">
          {[
            "Next.js 16",
            "React 19",
            "TypeScript",
            "Tailwind CSS 4",
            "Radix UI",
            "Lucide React",
            "MongoDB",
            "Vercel Analytics",
            "next-themes",
            "React Hook Form",
            "Zod",
            "Sonner",
            "Recharts",
            "Embla Carousel",
          ].map((tech) => (
            <span
              key={tech}
              className="border border-white/10 px-4 py-2 text-sm text-white/50"
            >
              {tech}
            </span>
          ))}
        </div>
      ),
    },

    {
      id: "highlight",
      label: "Highlight",
      eyebrow: "06 / Highlight",
      title: "More than a website.",
      content: (
        <p>
          The project combined storytelling, competition, and real-world
          exploration into a single fest experience under ENYUGMA.
        </p>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-black px-6 py-32">
      <div className="mx-auto w-full max-w-7xl">
        <p className="text-sm uppercase tracking-[0.3em] text-white/40">
          {project.number} — {project.category}
        </p>

        <h1 className="mt-6 max-w-5xl text-6xl font-bold tracking-tight md:text-9xl">
          {project.title}
        </h1>

        <p className="mt-10 max-w-3xl text-xl leading-relaxed text-white/50">
          {project.description}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="YOUR_LIVE_PROJECT_URL"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white px-6 py-4 text-sm font-medium uppercase tracking-[0.2em] text-black transition hover:bg-white/80"
          >
            See Project Live
            <span>↗</span>
          </a>

          <span className="text-xs uppercase tracking-[0.2em] text-white/25">
            Live Demo
          </span>
        </div>

        <div className="mt-16 grid gap-8 border-y border-white/10 py-8 md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/25">
              Role
            </p>

            <p className="mt-3 text-sm text-white/60">
              Event Lead · Website Developer
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/25">
              Stack
            </p>

            <p className="mt-3 text-sm text-white/60">
              React · TypeScript · Tailwind CSS
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/25">
              Type
            </p>

            <p className="mt-3 text-sm text-white/60">Live Event / Platform</p>
          </div>
        </div>

        <div className="mt-20 aspect-video border border-white/10 bg-white/[0.03] flex items-center justify-center">
          <span className="text-xs uppercase tracking-[0.25em] text-white/20">
            Project Preview
          </span>
        </div>

        <ProjectCaseStudy project={project} sections={sections} />
      </div>
    </main>
  );
}
