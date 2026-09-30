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
      title: "What is it?",
      content:
        "A live treasure hunt platform created for a college cultural fest, combining a digital experience with a large-scale offline event.",
    },
    {
      id: "problem",
      label: "Problem",
      eyebrow: "02 — Problem",
      title: "The problem",
      content:
        "A live campus-wide treasure hunt requires more than an event website. Participants, organizers, rounds, clues, and progression need to work together during a real-time physical event.",
    },
    {
      id: "solution",
      label: "Solution",
      eyebrow: "03 — Solution",
      title: "The solution",
      content:
        "Realm of Six combined a dedicated digital platform with the physical treasure hunt experience, providing the technology layer required to run and manage the event.",
    },
    {
      id: "features",
      label: "Features",
      eyebrow: "04 — Features",
      title: "Core features",
      content: (
        <ul className="space-y-4">
          <li>Interactive treasure hunt platform</li>
          <li>Multi-round event structure</li>
          <li>Online preliminary round</li>
          <li>Live participant experience</li>
          <li>Digital event coordination</li>
        </ul>
      ),
    },
    {
      id: "event",
      label: "The Event",
      eyebrow: "05 — The Event",
      title: "From website to live event",
      content:
        "The platform was built as part of a Game of Thrones-themed treasure hunt for the college cultural fest, supporting the digital side of an event involving participants across the campus.",
    },
    {
      id: "architecture",
      label: "Architecture",
      eyebrow: "06 — Architecture",
      title: "Platform architecture",
      content: (
        <div className="aspect-video border border-white/10 bg-white/[0.03]" />
      ),
    },
    {
      id: "tech-stack",
      label: "Tech Stack",
      eyebrow: "07 — Tech Stack",
      title: "Built with",
      content: project.stack.join(" · "),
    },
    {
      id: "challenges",
      label: "Challenges",
      eyebrow: "08 — Challenges",
      title: "What was difficult",
      content:
        "The main challenge was building a digital experience that could support a physical event with multiple rounds, participants, and time-sensitive interactions while also coordinating the broader event.",
    },
    {
      id: "outcome",
      label: "Outcome",
      eyebrow: "09 — Outcome",
      title: "The result",
      content:
        "A functioning digital platform integrated into a live college treasure hunt, combining software development with event leadership and execution.",
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
              {project.role}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/25">
              Stack
            </p>
            <p className="mt-3 text-sm text-white/60">
              {project.stack.join(" · ")}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/25">
              Type
            </p>
            <p className="mt-3 text-sm text-white/60">
              Event / Platform
            </p>
          </div>
        </div>

        <div className="mt-20 aspect-video border border-white/10 bg-white/[0.03]" />

        <ProjectCaseStudy
          project={project}
          sections={sections}
        />
      </div>
    </main>
  );
}