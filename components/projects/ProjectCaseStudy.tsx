"use client";

import { useEffect, useState } from "react";
import type { Project } from "@/data/projects";

type ProjectSection = {
  id: string;
  label: string;
  eyebrow: string;
  title: string;
  content: React.ReactNode;
};

type ProjectCaseStudyProps = {
  project: Project;
  sections: ProjectSection[];
};

export default function ProjectCaseStudy({
  project,
  sections,
}: ProjectCaseStudyProps) {
  const [activeSection, setActiveSection] = useState(
    sections[0]?.id ?? "",
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top -
              b.boundingClientRect.top,
          );

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-[220px_minmax(0,1fr)]">
      {/* Index */}
      <aside className="lg:sticky lg:top-32 lg:h-fit">
        <p className="text-xs uppercase tracking-[0.25em] text-white/25">
          On this project
        </p>

        <nav className="mt-6 flex flex-col gap-3">
          {sections.map((section) => {
            const active = activeSection === section.id;

            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`text-sm transition ${
                  active
                    ? "translate-x-1 text-white"
                    : "text-white/35 hover:text-white"
                }`}
              >
                {section.label}
              </a>
            );
          })}
        </nav>
      </aside>

      {/* Content */}
      <div className="min-w-0">
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-32 border-b border-white/10 py-20 first:pt-0 last:border-b-0"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-white/25">
              {section.eyebrow}
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              {section.title}
            </h2>

            <div className="mt-6 max-w-3xl text-lg leading-relaxed text-white/50">
              {section.content}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}