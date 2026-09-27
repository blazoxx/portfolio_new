"use client";

import { useEffect, useState } from "react";
import HomeSection from "@/components/home/HomeSection";
import HomeSitemap from "@/components/home/HomeSitemap";

const sections = [
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "personal", label: "Personal" },
  { id: "contact", label: "Contact" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("projects");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        threshold: [0.25, 0.5, 0.75],
      }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <HomeSitemap
        sections={sections}
        activeSection={activeSection}
        visible={true}
      />

      <HomeSection id="projects">
        <h1 className="text-6xl font-bold">Projects</h1>
      </HomeSection>

      <HomeSection id="skills">
        <h1 className="text-6xl font-bold">Skills</h1>
      </HomeSection>

      <HomeSection id="personal">
        <h1 className="text-6xl font-bold">Personal</h1>
      </HomeSection>

      <HomeSection id="contact">
        <h1 className="text-6xl font-bold">Contact</h1>
      </HomeSection>
    </main>
  );
}