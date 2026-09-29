import { projects } from "@/data/projects";
import ProjectIndex from "@/components/projects/ProjectIndex";

export default function AppointmentSchedulerPage() {
  const project = projects.find((item) => item.id === "appointment-scheduler");

  if (!project) {
    return null;
  }

  return (
    <main className="min-h-screen bg-black px-6 py-32">
      <div className="mx-auto w-full max-w-7xl">
        {/* Project Header */}
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

        {/* Project Metadata */}
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

            <p className="mt-3 text-sm text-white/60">SaaS / AI</p>
          </div>
        </div>

        {/* Project Hero Visual */}
        <div className="mt-20 aspect-video border border-white/10 bg-white/[0.03]" />

        {/* Case Study */}
        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-[220px_minmax(0,1fr)]">
          {/* Index */}
          <ProjectIndex />

          {/* Case Study Content */}
          <div className="min-w-0">
            <section
              id="overview"
              className="scroll-mt-32 border-b border-white/10 pb-20"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-white/25">
                01 — Overview
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight">
                What is it?
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/50">
                An AI-powered appointment scheduling platform designed to manage
                availability, bookings, rescheduling, cancellations, and
                intelligent slot selection.
              </p>
            </section>

            <section
              id="problem"
              className="scroll-mt-32 border-b border-white/10 py-20"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-white/25">
                02 — Problem
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight">
                The problem
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/50">
                Scheduling involves more than displaying an empty calendar.
                Users need to understand availability, choose suitable slots,
                and manage changes without unnecessary friction.
              </p>
            </section>

            <section
              id="solution"
              className="scroll-mt-32 border-b border-white/10 py-20"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-white/25">
                03 — Solution
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight">
                The solution
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/50">
                The platform combines structured scheduling functionality with
                an AI agent capable of understanding natural-language requests
                and finding suitable available slots.
              </p>
            </section>

            <section
              id="features"
              className="scroll-mt-32 border-b border-white/10 py-20"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-white/25">
                04 — Features
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight">
                Core features
              </h2>

              <ul className="mt-8 space-y-4 text-lg text-white/50">
                <li>Availability management</li>
                <li>Recurring schedules</li>
                <li>Booking and rescheduling</li>
                <li>Cancellation handling</li>
                <li>AI-powered slot selection</li>
              </ul>
            </section>

            <section
              id="ai-agent"
              className="scroll-mt-32 border-b border-white/10 py-20"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-white/25">
                05 — AI Agent
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight">
                Natural-language scheduling
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/50">
                The AI agent interprets a scheduling request, reads the
                available schedule, traces suitable empty slots, and helps
                determine an appropriate booking option.
              </p>
            </section>

            <section
              id="architecture"
              className="scroll-mt-32 border-b border-white/10 py-20"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-white/25">
                06 — Architecture
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight">
                System architecture
              </h2>

              <div className="mt-8 aspect-video border border-white/10 bg-white/[0.03]" />
            </section>

            <section
              id="tech-stack"
              className="scroll-mt-32 border-b border-white/10 py-20"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-white/25">
                07 — Tech Stack
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight">
                Built with
              </h2>

              <p className="mt-6 text-lg text-white/50">
                {project.stack.join(" · ")}
              </p>
            </section>

            <section
              id="challenges"
              className="scroll-mt-32 border-b border-white/10 py-20"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-white/25">
                08 — Challenges
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight">
                What was difficult
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/50">
                The project required coordinating scheduling logic, availability
                management, booking flows, and AI-assisted interaction into one
                consistent system.
              </p>
            </section>

            <section id="outcome" className="scroll-mt-32 py-20">
              <p className="text-xs uppercase tracking-[0.25em] text-white/25">
                09 — Outcome
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight">
                The result
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/50">
                A working scheduling platform that combines conventional
                appointment management with an AI-driven interface for finding
                suitable appointment slots.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
