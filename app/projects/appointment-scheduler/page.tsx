import { projects } from "@/data/projects";
import ProjectCaseStudy from "@/components/projects/ProjectCaseStudy";

export default function AppointmentSchedulerPage() {
  const project = projects.find(
    (item) => item.id === "appointment-scheduler",
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
        "An AI-powered appointment scheduling platform designed to manage availability, bookings, rescheduling, cancellations, and intelligent slot selection.",
    },
    {
      id: "problem",
      label: "Problem",
      eyebrow: "02 — Problem",
      title: "The problem",
      content:
        "Scheduling involves more than displaying an empty calendar. Users need to understand availability, choose suitable slots, and manage changes without unnecessary friction.",
    },
    {
      id: "solution",
      label: "Solution",
      eyebrow: "03 — Solution",
      title: "The solution",
      content:
        "The platform combines structured scheduling functionality with an AI agent capable of understanding natural-language requests and finding suitable available slots.",
    },
    {
      id: "features",
      label: "Features",
      eyebrow: "04 — Features",
      title: "Core features",
      content: (
        <ul className="space-y-4">
          <li>Availability management</li>
          <li>Recurring schedules</li>
          <li>Booking and rescheduling</li>
          <li>Cancellation handling</li>
          <li>AI-powered slot selection</li>
        </ul>
      ),
    },
    {
      id: "ai-agent",
      label: "AI Agent",
      eyebrow: "05 — AI Agent",
      title: "Natural-language scheduling",
      content:
        "The AI agent interprets a scheduling request, reads the available schedule, traces suitable empty slots, and helps determine an appropriate booking option.",
    },
    {
      id: "architecture",
      label: "Architecture",
      eyebrow: "06 — Architecture",
      title: "System architecture",
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
        "The project required coordinating scheduling logic, availability management, booking flows, and AI-assisted interaction into one consistent system.",
    },
    {
      id: "outcome",
      label: "Outcome",
      eyebrow: "09 — Outcome",
      title: "The result",
      content:
        "A working scheduling platform that combines conventional appointment management with an AI-driven interface for finding suitable appointment slots.",
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
              SaaS / AI
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