import { projects } from "@/data/projects";
import ProjectCaseStudy from "@/components/projects/ProjectCaseStudy";

export default function PatheyatraPage() {
  const project = projects.find(
    (item) => item.id === "patheyatra-ai",
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
        "A multi-agent AI travel planner that researches destinations, weather, budgets, and itineraries through an orchestrated workflow.",
    },
    {
      id: "problem",
      label: "Problem",
      eyebrow: "02 — Problem",
      title: "The problem",
      content:
        "Planning a trip requires combining information from multiple sources, understanding user preferences, estimating costs, and turning everything into a practical itinerary.",
    },
    {
      id: "solution",
      label: "Solution",
      eyebrow: "03 — Solution",
      title: "The solution",
      content:
        "Pātheyātrā AI uses multiple specialized agents coordinated through a central workflow to transform a natural-language travel request into structured travel information and an itinerary.",
    },
    {
      id: "features",
      label: "Features",
      eyebrow: "04 — Features",
      title: "Core features",
      content: (
        <ul className="space-y-4">
          <li>Natural-language travel planning</li>
          <li>Destination research</li>
          <li>Weather information</li>
          <li>Day-wise itinerary generation</li>
          <li>Budget estimation</li>
          <li>Multi-agent orchestration</li>
        </ul>
      ),
    },
    {
      id: "agents",
      label: "AI Agents",
      eyebrow: "05 — AI Agents",
      title: "The agent system",
      content: (
        <ul className="space-y-4">
          <li>Intent Agent</li>
          <li>Research Agent</li>
          <li>Weather Agent</li>
          <li>Itinerary Agent</li>
          <li>Budget Agent</li>
        </ul>
      ),
    },
    {
      id: "architecture",
      label: "Architecture",
      eyebrow: "06 — Architecture",
      title: "Multi-agent architecture",
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
        "The project required coordinating multiple AI agents, structuring their communication, handling external information, and maintaining a consistent workflow from user intent to final itinerary.",
    },
    {
      id: "outcome",
      label: "Outcome",
      eyebrow: "09 — Outcome",
      title: "The result",
      content:
        "A modular AI travel-planning system demonstrating how specialized agents can be orchestrated to produce structured travel recommendations.",
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
              AI / Multi-Agent
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