import { projects } from "@/data/projects";
import ProjectCaseStudy from "@/components/projects/ProjectCaseStudy";

export default function PatheyatraPage() {
  const project = projects.find((item) => item.id === "patheyatra-ai");

  if (!project) {
    return null;
  }

  const sections = [
    {
      id: "overview",
      label: "Overview",
      eyebrow: "01 / Overview",
      title: "A multi-agent travel planner.",
      content: (
        <p>
          Pātheyātrā AI is an AI-powered travel planning system that generates
          personalized itineraries, budget breakdowns, destination insights, and
          weather information through a coordinated set of specialized AI
          agents.
        </p>
      ),
    },

    {
      id: "problem",
      label: "Problem",
      eyebrow: "02 / Problem",
      title: "Travel planning involves multiple decisions.",
      content: (
        <p>
          Building a useful travel plan requires understanding the user&apos;s
          preferences, researching a destination, planning each day, estimating
          expenses, and considering current weather conditions.
        </p>
      ),
    },

    {
      id: "solution",
      label: "Solution",
      eyebrow: "03 / Solution",
      title: "Specialized agents, one coordinated workflow.",
      content: (
        <p>
          Pātheyātrā AI separates these responsibilities into specialized agents
          coordinated by a central orchestrator. Structured JSON communication
          allows the different stages of the workflow to work together.
        </p>
      ),
    },

    {
      id: "agents",
      label: "AI Agents",
      eyebrow: "04 / Agents",
      title: "Five specialized agents.",
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="font-medium text-white">Intent Agent</h3>
            <p className="mt-2">
              Extracts destination, duration, budget, and travel preferences
              from natural-language input.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-white">Research Agent</h3>
            <p className="mt-2">
              Collects destination insights, attractions, local transport
              methods, and best times to visit.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-white">Itinerary Agent</h3>
            <p className="mt-2">
              Generates personalized day-by-day itineraries using trip duration,
              preferences, and destination context.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-white">Budget Agent</h3>
            <p className="mt-2">
              Estimates expenses across hotels, food, flights, local transport,
              and activities while considering the user&apos;s budget.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-white">Weather Agent</h3>
            <p className="mt-2">
              Fetches live weather information for the selected destination
              using weather APIs.
            </p>
          </div>
        </div>
      ),
    },

    {
      id: "architecture",
      label: "Architecture",
      eyebrow: "05 / Architecture",
      title: "Modular orchestration.",
      content: (
        <p>
          The system uses a FastAPI backend with asynchronous workflow
          orchestration. A central orchestrator coordinates specialized agents,
          while structured JSON is used for communication between workflow
          stages.
        </p>
      ),
    },

    {
      id: "stack",
      label: "Tech Stack",
      eyebrow: "06 / Stack",
      title: "AI meets a lightweight web stack.",
      content: (
        <div className="flex flex-wrap gap-3">
          {[
            "React",
            "Vite",
            "CSS",
            "FastAPI",
            "Uvicorn",
            "Python",
            "Asyncio",
            "Gemini 2.5 Flash",
            "Pydantic",
            "OpenWeatherMap API",
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
      id: "decisions",
      label: "Design Decisions",
      eyebrow: "07 / Decisions",
      title: "Why a multi-agent architecture?",
      content: (
        <div className="space-y-6">
          <p>
            The project uses specialized agents to improve separation of
            concerns, maintainability, scalability, and independent reasoning
            workflows.
          </p>

          <p>
            FastAPI provides asynchronous request handling and a lightweight API
            architecture, while Gemini was selected for fast inference,
            structured JSON generation, cost efficiency, and reasoning
            capabilities.
          </p>
        </div>
      ),
    },

    {
      id: "challenges",
      label: "Challenges",
      eyebrow: "08 / Challenges",
      title: "Making LLM workflows reliable.",
      content: (
        <ul className="space-y-4">
          <li>Handling inconsistent LLM JSON outputs.</li>
          <li>Optimizing prompts for structured responses.</li>
          <li>Synchronizing frontend and backend workflows.</li>
          <li>Estimating realistic travel budgets.</li>
          <li>Handling API quota limitations.</li>
          <li>Managing workflow orchestration timing.</li>
          <li>Gracefully handling malformed responses.</li>
        </ul>
      ),
    },

    {
      id: "learnings",
      label: "Learnings",
      eyebrow: "09 / Learnings",
      title: "From prompts to AI systems.",
      content: (
        <p>
          The project provided hands-on experience with AI-agent orchestration,
          prompt engineering, asynchronous backend systems, API integration,
          structured LLM pipelines, frontend/backend communication,
          production-style debugging, and modular AI system design.
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

            <p className="mt-3 text-sm text-white/60">{project.role}</p>
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

            <p className="mt-3 text-sm text-white/60">AI / Multi-Agent</p>
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
