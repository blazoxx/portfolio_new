export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="min-h-[200vh] scroll-snap-align-start"
    >
      <div className="flex h-screen items-center justify-center px-6">
        <div className="text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/40">
            Projects — View 01
          </p>

          <h2 className="text-7xl font-bold">
            PROJECTS
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-white/50">
            First viewport of the Projects section.
          </p>

          <div className="mt-20 text-sm text-white/30">
            Scroll ↓
          </div>
        </div>
      </div>

      <div className="flex h-screen items-center justify-center px-6">
        <div className="text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/40">
            Projects — View 02
          </p>

          <h2 className="text-6xl font-bold">
            SECOND VIEW
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-white/50">
            Second viewport inside Projects.
          </p>
        </div>
      </div>
    </section>
  );
}