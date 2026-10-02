import { projects } from "@/data/projects";
import ProjectCaseStudy from "@/components/projects/ProjectCaseStudy";

export default function RealmOfSixPage() {
  const project = projects.find(
    (item) => item.id === "realm-of-six",
  );

  if (!project) {
    return null;
  }

  const sections = [
    {
      id: "overview",
      label: "Overview",
      eyebrow: "01 — Overview",
      title: "A treasure hunt built as a live experience",
      content:
        "Realm of Six was a Game of Thrones-themed treasure hunt created for the college cultural fest. I led the event and designed and developed the digital platform that supported the experience alongside the physical event.",
    },
    {
      id: "problem",
      label: "The Challenge",
      eyebrow: "02 — The Challenge",
      title: "Building for a live campus-wide event",
      content:
        "This was not simply a website project. The experience had to support an online preliminary round, a two-day offline event, multiple stages, and a large number of participants while the event itself was being coordinated.",
    },
    {
      id: "solution",
      label: "Solution",
      eyebrow: "03 — Solution",
      title: "A digital layer for the physical game",
      content:
        "The platform was designed as the digital layer of the treasure hunt, connecting the online preliminary round and the live event experience with the structure and progression of the game.",
    },
    {
      id: "event",
      label: "The Event",
      eyebrow: "04 — The Event",
      title: "Two days. Multiple rounds. One winner.",
      content: (
        <div className="space-y-8">
          <p>
            The event ran for two days, with approximately six hours
            of live activity each day.
          </p>

          <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-2">
            <div className="bg-black p-6">
              <p className="text-3xl font-semibold">300+</p>
              <p className="mt-2 text-sm text-white/40">
                participants in the online preliminary round
              </p>
            </div>

            <div className="bg-black p-6">
              <p className="text-3xl font-semibold">100+</p>
              <p className="mt-2 text-sm text-white/40">
                participants in the offline event
              </p>
            </div>

            <div className="bg-black p-6">
              <p className="text-3xl font-semibold">2</p>
              <p className="mt-2 text-sm text-white/40">
                days of live gameplay
              </p>
            </div>

            <div className="bg-black p-6">
              <p className="text-3xl font-semibold">4</p>
              <p className="mt-2 text-sm text-white/40">
                primary rounds
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "features",
      label: "Experience",
      eyebrow: "05 — Experience",
      title: "The game structure",
      content: (
        <ul className="space-y-4">
          <li>Online preliminary round</li>
          <li>Four primary rounds</li>
          <li>Round 3 divided into three internal stages</li>
          <li>Final round divided into three internal stages</li>
          <li>Live campus-wide participant experience</li>
        </ul>
      ),
    },
    {
      id: "role",
      label: "My Role",
      eyebrow: "06 — My Role",
      title: "Developer and event lead",
      content:
        "I led the event as part of an 11-member core team and independently designed and developed the website. More than 20 people were involved in the broader preparation and execution of the event.",
    },
    {
      id: "architecture",
      label: "Platform",
      eyebrow: "07 — Platform",
      title: "The digital experience",
      content: (
        <div className="space-y-6">
          <p>
            The website served as the technology layer supporting
            the treasure hunt experience and its event-specific
            interactions.
          </p>

          <div className="aspect-video border border-white/10 bg-white/[0.03] flex items-center justify-center">
            <span className="text-xs uppercase tracking-[0.25em] text-white/20">
              Platform Preview
            </span>
          </div>
        </div>
      ),
    },
    {
      id: "tech-stack",
      label: "Tech Stack",
      eyebrow: "08 — Tech Stack",
      title: "Built with",
      content: (
        <ul className="space-y-4">
          <li>React</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
        </ul>
      ),
    },
    {
      id: "challenges",
      label: "Challenges",
      eyebrow: "09 — Challenges",
      title: "Software under event pressure",
      content:
        "The challenge was not only developing the platform but making the digital experience work as part of a live event. The project required coordinating the website with a multi-stage game, participant flow, event logistics, and a large team working across preparation and execution.",
    },
    {
      id: "outcome",
      label: "Outcome",
      eyebrow: "10 — Outcome",
      title: "A software project that became a live event",
      content:
        "Realm of Six brought together software development, game design, and event execution. The event ran for two days with more than 100 offline participants after a preliminary online round involving more than 300 participants. The winning team was House Stark.",
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

            <p className="mt-3 text-sm text-white/60">
              Live Event / Platform
            </p>
          </div>
        </div>

        <div className="mt-20 aspect-video border border-white/10 bg-white/[0.03] flex items-center justify-center">
          <span className="text-xs uppercase tracking-[0.25em] text-white/20">
            Project Preview
          </span>
        </div>

        <ProjectCaseStudy
          project={project}
          sections={sections}
        />
      </div>
    </main>
  );
}