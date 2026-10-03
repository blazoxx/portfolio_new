import { projects } from "@/data/projects";
import ProjectCaseStudy from "@/components/projects/ProjectCaseStudy";

export default function AppointmentSchedulerPage() {
  const project = projects.find((item) => item.id === "appointment-scheduler");

  if (!project) {
    return null;
  }

  const sections = [
    {
      id: "overview",
      label: "Overview",
      eyebrow: "01 / Overview",
      title: "A complete scheduling workflow.",
      content: (
        <p>
          Scheduler is a full-stack appointment scheduling platform that manages
          meetings from request to confirmation. It combines public booking,
          host management, automated email notifications, calendar integration,
          and AI-assisted scheduling into one workflow.
        </p>
      ),
    },

    {
      id: "problem",
      label: "Problem",
      eyebrow: "02 / Problem",
      title: "Scheduling is more than picking a time.",
      content: (
        <p>
          A scheduling system needs to handle availability, booking requests,
          approvals, cancellations, rescheduling, notifications, and calendar
          events without making the workflow complicated for either participant.
        </p>
      ),
    },

    {
      id: "solution",
      label: "Solution",
      eyebrow: "03 / Solution",
      title: "One workflow from request to confirmation.",
      content: (
        <p>
          Scheduler brings the public booking experience and host management
          workflow together. Guests can find available slots and submit
          requests, while hosts can manage appointments, availability, and
          booking status from a centralized dashboard.
        </p>
      ),
    },

    {
      id: "features",
      label: "Core Features",
      eyebrow: "04 / Features",
      title: "Everything around the appointment.",
      content: (
        <ul className="space-y-4">
          <li>Public booking pages with available time slots.</li>
          <li>Host dashboard for appointment management.</li>
          <li>Booking approval and rejection.</li>
          <li>Cancellation and rescheduling workflows.</li>
          <li>Availability management.</li>
          <li>Automated email notifications through Resend.</li>
          <li>Google Calendar event links and ICS generation.</li>
        </ul>
      ),
    },

    {
      id: "ai",
      label: "AI Scheduling",
      eyebrow: "05 / AI",
      title: "AI-assisted scheduling.",
      content: (
        <p>
          The scheduling system uses the Gemini API to generate available
          meeting slots, suggest scheduling options, and support availability
          planning. The AI module is designed to remain extensible for future
          scheduling enhancements.
        </p>
      ),
    },

    {
      id: "architecture",
      label: "Architecture",
      eyebrow: "06 / Architecture",
      title: "Separated frontend and backend.",
      content: (
        <p>
          The application is split into a Next.js frontend and a FastAPI
          backend. Supabase provides the database and authentication layer,
          while dedicated services handle email, calendar integration, and
          AI-assisted scheduling.
        </p>
      ),
    },

    {
      id: "stack",
      label: "Tech Stack",
      eyebrow: "07 / Stack",
      title: "Built across the full stack.",
      content: (
        <div className="flex flex-wrap gap-3">
          {[
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "FastAPI",
            "Python",
            "Supabase",
            "Resend",
            "Google Calendar API",
            "Gemini API",
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
      id: "status",
      label: "Status",
      eyebrow: "08 / Status",
      title: "Feature-complete MVP.",
      content: (
        <p>
          The current version is a feature-complete MVP covering public booking,
          host management, appointment lifecycle operations, email
          notifications, calendar integration, AI-assisted scheduling, and
          integration testing for calendar utilities. Production deployment,
          performance improvements, expanded testing, and additional AI
          scheduling features remain in progress.
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

            <p className="mt-3 text-sm text-white/60">SaaS / AI</p>
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
