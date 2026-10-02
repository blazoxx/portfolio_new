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
      title: "AI-powered appointment scheduling",
      content:
        "An appointment scheduling SaaS designed for clinics, consultants, and interview scheduling. The platform combines structured availability management with an AI agent that can understand natural-language scheduling requests and find suitable open slots.",
    },
    {
      id: "problem",
      label: "Problem",
      eyebrow: "02 — Problem",
      title: "Scheduling is more than a calendar",
      content:
        "Appointment systems need to handle availability, recurring schedules, bookings, rescheduling, and cancellations while keeping the experience simple for both administrators and users. Finding a suitable slot can also require understanding the user's request and checking the available schedule.",
    },
    {
      id: "solution",
      label: "Solution",
      eyebrow: "03 — Solution",
      title: "A scheduling system with an AI interface",
      content:
        "The platform provides a conventional scheduling workflow for managing availability and appointments, while an AI agent acts as a natural-language interface on top of that system. Instead of manually searching through a calendar, a user can describe when they want an appointment and the agent can trace suitable available slots.",
    },
    {
      id: "features",
      label: "Core Features",
      eyebrow: "04 — Features",
      title: "The scheduling system",
      content: (
        <ul className="space-y-4">
          <li>Admin dashboard for schedule management</li>
          <li>Availability CRUD</li>
          <li>Recurring availability schedules</li>
          <li>User appointment booking</li>
          <li>Appointment rescheduling</li>
          <li>Appointment cancellation</li>
          <li>AI-assisted slot selection</li>
        </ul>
      ),
    },
    {
      id: "ai-agent",
      label: "AI Agent",
      eyebrow: "05 — AI Agent",
      title: "Natural language → available slot",
      content:
        "The AI agent is designed to understand a user's scheduling request, interpret the relevant constraints, read the available schedule, and trace suitable empty slots. This creates a more conversational interface for interacting with the scheduling system.",
    },
    {
      id: "architecture",
      label: "Architecture",
      eyebrow: "06 — Architecture",
      title: "Application architecture",
      content: (
        <div className="space-y-6">
          <p>
            The application is built around a Next.js frontend and a
            backend data layer powered by PostgreSQL through Supabase.
          </p>

          <div className="aspect-video border border-white/10 bg-white/[0.03] flex items-center justify-center">
            <span className="text-xs uppercase tracking-[0.25em] text-white/20">
              Architecture Diagram
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
          <li>Next.js — application framework</li>
          <li>TypeScript — application logic</li>
          <li>Supabase — backend and database</li>
          <li>PostgreSQL — relational data storage</li>
          <li>Supabase Realtime — real-time capabilities</li>
          <li>Resend — email integration</li>
        </ul>
      ),
    },
    {
      id: "challenges",
      label: "Challenges",
      eyebrow: "08 — Challenges",
      title: "Connecting scheduling logic with AI",
      content:
        "The main engineering challenge was bringing conventional scheduling logic and an AI-driven interface together without losing the reliability of structured availability data. The system also required handling recurring schedules, booking state, rescheduling, cancellation flows, and communication around appointments.",
    },
    {
      id: "outcome",
      label: "Outcome",
      eyebrow: "09 — Outcome",
      title: "A working scheduling SaaS",
      content:
        "The result is an appointment scheduling platform that combines traditional calendar and availability management with an AI interface for discovering suitable appointment slots through natural-language interaction.",
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