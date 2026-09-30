import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-32">
      <div className="mx-auto w-full max-w-7xl">
        <p className="text-sm uppercase tracking-[0.3em] text-white/40">
          Projects
        </p>

        <h1 className="mt-6 text-7xl font-bold tracking-tight md:text-9xl">
          THINGS
          <br />
          I&apos;VE BUILT.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/40">
          A collection of software, AI systems, experiments, and
          products I&apos;ve built.
        </p>

        <div className="mt-24 border-t border-white/10">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={project.href}
              className="group block border-b border-white/10 py-10 transition hover:bg-white/[0.03]"
            >
              <div className="grid gap-6 md:grid-cols-[80px_1fr_auto] md:items-center">
                <span className="text-sm text-white/25">
                  {project.number}
                </span>

                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-white/30">
                    {project.category}
                  </p>

                  <h2 className="mt-3 text-3xl font-semibold tracking-tight transition group-hover:translate-x-2 md:text-5xl">
                    {project.title}
                  </h2>

                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/40">
                    {project.description}
                  </p>
                </div>

                <span className="text-sm text-white/30 transition group-hover:text-white">
                  View →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}