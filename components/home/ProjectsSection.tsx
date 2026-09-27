export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 min-h-[200vh] bg-black"
    >
      {/* Project 01 */}
      <div className="sticky top-0 z-10 flex h-screen items-center justify-center bg-black px-6">
        <div className="text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/40">
            Project 01
          </p>

          <h2 className="text-7xl font-bold">
            PROJECTS
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-white/50">
            First project slide.
          </p>
        </div>
      </div>

      {/* Project 02 */}
      <div className="sticky top-0 z-20 flex h-screen items-center justify-center bg-black px-6">
        <div className="text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/40">
            Project 02
          </p>

          <h2 className="text-6xl font-bold">
            SECOND PROJECT
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-white/50">
            Second project slides over the first.
          </p>
        </div>
      </div>
    </section>
  );
}