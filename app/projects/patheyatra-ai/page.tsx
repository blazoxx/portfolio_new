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
      title: "AI-powered travel planning",
      content:
        "Pātheyātrā AI is a multi-agent travel planning system that transforms a natural-language travel request into structured destination insights, weather information, budget estimates, and a day-wise itinerary.",
    },
    {
      id: "problem",
      label: "Problem",
      eyebrow: "02 — Problem",
      title: "Travel planning is fragmented",
      content:
        "Planning a trip requires combining several kinds of information: understanding the traveller's intent, researching destinations, considering weather, estimating costs, and organizing everything into a practical itinerary. Handling these tasks as one large AI workflow can make the system difficult to structure and extend.",
    },
    {
      id: "solution",
      label: "Solution",
      eyebrow: "03 — Solution",
      title: "Specialized agents, one workflow",
      content:
        "Pātheyātrā AI separates the planning process into specialized agents. A central orchestration layer coordinates the agents and passes structured information between them before producing the final travel plan.",
    },
    {
      id: "features",
      label: "Core Features",
      eyebrow: "04 — Features",
      title: "From intent to itinerary",
      content: (
        <ul className="space-y-4">
          <li>Natural-language travel planning</li>
          <li>Intent extraction from user requests</li>
          <li>Destination research and recommendations</li>
          <li>Live weather integration</li>
          <li>Day-wise itinerary generation</li>
          <li>Smart budget estimation</li>
          <li>Structured JSON-based agent communication</li>
          <li>Asynchronous workflow orchestration</li>
        </ul>
      ),
    },
    {
      id: "agents",
      label: "AI Agents",
      eyebrow: "05 — AI Agents",
      title: "A team of specialized agents",
      content: (
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-medium text-white">
              Intent Agent
            </h3>
            <p className="mt-2">
              Extracts the user&apos;s travel requirements and converts
              natural language into structured intent.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-white">
              Research Agent
            </h3>
            <p className="mt-2">
              Handles destination research and generates relevant
              travel insights.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-white">
              Weather Agent
            </h3>
            <p className="mt-2">
              Provides weather information relevant to the planned
              destination and trip.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-white">
              Itinerary Agent
            </h3>
            <p className="mt-2">
              Converts the gathered information into a structured
              day-wise travel itinerary.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-white">
              Budget Agent
            </h3>
            <p className="mt-2">
              Estimates the expected travel budget from the available
              trip information.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "architecture",
      label: "Architecture",
      eyebrow: "06 — Architecture",
      title: "Multi-agent orchestration",
      content: (
        <div className="space-y-6">
          <p>
            The system uses a FastAPI backend to coordinate the
            different agents and maintain a structured flow of
            information between them.
          </p>

          <div className="aspect-video border border-white/10 bg-white/[0.03] flex items-center justify-center">
            <span className="text-xs uppercase tracking-[0.25em] text-white/20">
              Multi-Agent Architecture
            </span>
          </div>
        </div>
      ),
    },
    {
      id: "tech-stack",
      label: "Tech Stack",
      eyebrow: "07 — Tech Stack",
      title: "Built with",
      content: (
        <ul className="space-y-4">
          <li>Python — core application logic</li>
          <li>FastAPI — backend API</li>
          <li>Gemini API — AI generation and reasoning</li>
          <li>Asynchronous orchestration — agent workflow</li>
          <li>OpenWeatherMap API — weather integration</li>
        </ul>
      ),
    },
    {
      id: "challenges",
      label: "Challenges",
      eyebrow: "08 — Challenges",
      title: "Orchestrating multiple AI agents",
      content:
        "The main challenge was coordinating specialized agents while keeping communication between them structured and predictable. The project also involved handling external APIs and AI-service constraints while maintaining a consistent workflow from user intent to the final itinerary.",
    },
    {
      id: "outcome",
      label: "Outcome",
      eyebrow: "09 — Outcome",
      title: "A modular AI travel planner",
      content:
        "The result is a modular multi-agent travel-planning system demonstrating how specialized AI agents can work together to transform an unstructured travel request into structured recommendations, budget information, weather context, and an itinerary.",
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