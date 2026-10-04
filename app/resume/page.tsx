import Link from "next/link";
import { resume } from "@/data/resume";
import { profile } from "@/data/profile";
import { skillGroups } from "@/data/skills";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="px-6 pb-24 pt-36">
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-white/30">
            Resume
          </p>

          <div className="mt-8 flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div>
              {profile.fullName.split(" ").map((name, index) => (
                <span key={name}>
                  {index > 0 && <br />}
                  {name}
                </span>
              ))}

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/40">
                {profile.role}
              </p>
            </div>

            <div className="flex gap-3">
              <Link
                href="/resume.pdf"
                target="_blank"
                className="border border-white/20 px-6 py-4 text-xs uppercase tracking-[0.2em] text-white/60 transition hover:border-white hover:text-white"
              >
                View Resume
              </Link>

              <a
                href="/resume.pdf"
                download
                className="border border-white/10 px-6 py-4 text-xs uppercase tracking-[0.2em] text-white/30 transition hover:border-white/30 hover:text-white"
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="border-y border-white/10 px-6 py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-12 md:grid-cols-[220px_1fr]">
          <p className="text-xs uppercase tracking-[0.3em] text-white/30">
            Profile
          </p>

          <p className="max-w-4xl text-2xl leading-relaxed text-white/60 md:text-4xl">
            {resume.summary}
          </p>
        </div>
      </section>

      {/* Resume Sections */}
      <section className="px-6 py-24">
        <div className="mx-auto w-full max-w-7xl space-y-24">
          {/* Projects */}
          <section className="border-t border-white/10 pt-12">
            <p className="text-xs uppercase tracking-[0.3em] text-white/30">
              01 / Projects
            </p>

            <div className="mt-10 space-y-8">
              {resume.projects.map((project) => (
                <article key={project.title}>
                  <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
                    {project.title}
                  </h2>

                  <p className="mt-3 max-w-3xl text-lg leading-relaxed text-white/40">
                    {project.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* Achievements */}
          <section className="border-t border-white/10 pt-12">
            <p className="text-xs uppercase tracking-[0.3em] text-white/30">
              02 / Achievements
            </p>

            <div className="mt-10 space-y-4">
              {resume.achievements.map((achievement) => (
                <p
                  key={achievement}
                  className="text-2xl text-white/60 md:text-4xl"
                >
                  {achievement}
                </p>
              ))}
            </div>
          </section>

          {/* Roles */}
          <section className="border-t border-white/10 pt-12">
            <p className="text-xs uppercase tracking-[0.3em] text-white/30">
              03 / Roles
            </p>

            <div className="mt-10 space-y-4">
              {resume.roles.map((role) => (
                <p key={role} className="text-2xl text-white/60 md:text-4xl">
                  {role}
                </p>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="border-t border-white/10 px-6 py-24 pb-4">
            <div className="mx-auto w-full max-w-7xl">
              <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                04 / Skills
              </p>

              <div className="mt-10 space-y-10">
                {skillGroups.map((group) => (
                  <div
                    key={group.category}
                    className="grid gap-6 md:grid-cols-[180px_1fr]"
                  >
                    <p className="pt-2 text-sm uppercase tracking-[0.2em] text-white/30">
                      {group.category}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="border border-white/10 px-4 py-2 text-sm text-white/50 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.03] hover:text-white"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="border-t border-white/10 pt-12">
            <p className="text-xs uppercase tracking-[0.3em] text-white/30">
              <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                05 / Education
              </p>
            </p>

            <div className="mt-10 space-y-10">
              {resume.education.map((item) => (
                <article key={item.institution}>
                  <div className="flex flex-col justify-between gap-2 md:flex-row">
                    <h2 className="text-2xl font-semibold md:text-4xl">
                      {item.institution}
                    </h2>

                    <span className="text-sm text-white/30">
                      {item.duration}
                    </span>
                  </div>

                  <p className="mt-3 text-lg text-white/50">{item.degree}</p>

                  <p className="mt-1 text-sm text-white/30">{item.location}</p>
                </article>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section className="border-t border-white/10 pt-12">
            <p className="text-xs uppercase tracking-[0.3em] text-white/30">
              06 / Certifications
            </p>

            <div className="mt-10 space-y-4">
              {resume.certifications.map((certification) => (
                <p
                  key={certification}
                  className="text-2xl text-white/60 md:text-4xl"
                >
                  {certification}
                </p>
              ))}
            </div>
          </section>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-white/30">
            Contact
          </p>

          <h2 className="mt-6 text-5xl font-bold tracking-tight md:text-8xl">
            LET&apos;S
            <br />
            BUILD.
          </h2>

          <Link
            href="/contact"
            className="mt-10 inline-block border border-white/20 px-7 py-4 text-xs uppercase tracking-[0.2em] text-white/60 transition hover:border-white hover:text-white"
          >
            Get in touch →
          </Link>
        </div>
      </section>
    </main>
  );
}
