"use client";

import { useEffect, useState } from "react";

const sections = [
  ["overview", "Overview"],
  ["problem", "Problem"],
  ["solution", "Solution"],
  ["features", "Features"],
  ["ai-agent", "AI Agent"],
  ["architecture", "Architecture"],
  ["tech-stack", "Tech Stack"],
  ["challenges", "Challenges"],
  ["outcome", "Outcome"],
];

export default function ProjectIndex() {
  const [activeSection, setActiveSection] = useState("overview");

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

    sections.forEach(([id]) => {
      const element = document.getElementById(id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="lg:sticky lg:top-32 lg:h-fit">
      <p className="text-xs uppercase tracking-[0.25em] text-white/25">
        On this project
      </p>

      <nav className="mt-6 flex flex-col gap-3">
        {sections.map(([id, label]) => {
          const active = activeSection === id;

          return (
            <a
              key={id}
              href={`#${id}`}
              className={`text-sm transition ${
                active
                  ? "translate-x-1 text-white"
                  : "text-white/35 hover:text-white"
              }`}
            >
              {label}
            </a>
          );
        })}
      </nav>
    </aside>
  );
}