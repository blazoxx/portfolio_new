export default function ProjectsSection() {
  return (
    <section id="projects" className="relative z-10 min-h-[300vh] bg-black">
      {/* Project 01 */}
      <div className="sticky top-0 flex h-screen items-center justify-center bg-zinc-900">
        <div className="text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/40">
            Project 01
          </p>

          <h2 className="text-7xl font-bold">PROJECT ONE</h2>
        </div>
      </div>

      {/* Project 02 */}
      <div className="sticky top-0 z-20 flex h-screen items-center justify-center bg-zinc-800">
        <div className="text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/40">
            Project 02
          </p>

          <h2 className="text-7xl font-bold">PROJECT TWO</h2>
        </div>
      </div>

      {/* Project 03 */}
      <div className="sticky top-0 z-30 flex h-screen items-center justify-center bg-emerald-950">
        <div className="text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/40">
            Project 03
          </p>

          <h2 className="text-7xl font-bold">PROJECT THREE</h2>
        </div>
      </div>
    </section>
  );
}
