import { skillGroups } from "@/data/skills";

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-32">
      <div className="mx-auto w-full max-w-7xl">
        <p className="text-sm uppercase tracking-[0.3em] text-white/40">
          Skills
        </p>

        <h1 className="mt-6 text-7xl font-bold tracking-tight md:text-9xl">
          WHAT I
          <br />
          BUILD WITH.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/40">
          The technologies and tools I use to build software,
          experiment with AI, and turn ideas into working products.
        </p>

        <div className="mt-24 border-t border-white/10">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="grid gap-8 border-b border-white/10 py-10 md:grid-cols-[220px_1fr]"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-white/30">
                {group.category}
              </p>

              <div className="flex flex-wrap gap-x-8 gap-y-4">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-2xl font-medium tracking-tight text-white/70 transition hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 border-t border-white/10 pt-8">
          <p className="text-xs uppercase tracking-[0.25em] text-white/25">
            Currently exploring
          </p>

          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-4 text-xl text-white/50">
            <span>Agentic AI</span>
            <span>LLM Systems</span>
            <span>AI Research</span>
          </div>
        </div>
      </div>
    </main>
  );
}