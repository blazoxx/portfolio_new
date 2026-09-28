"use client";

import { useEffect, useState } from "react";
import HomeSection from "@/components/home/HomeSection";
import HomeSitemap from "@/components/home/HomeSitemap";
import ProjectsSection from "@/components/home/ProjectsSection";
import CircleLanding from "@/components/home/CircleLanding";
import AboutPage from "@/app/about/page";

const sections = [
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "personal", label: "Personal" },
  { id: "contact", label: "Contact" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("projects");
  const [showSitemap, setShowSitemap] = useState(false);

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
        threshold: [0.1, 0.25, 0.5, 0.75, 0.9],
      },
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const projects = document.getElementById("projects");

      if (!projects) return;

      setShowSitemap(window.scrollY >= projects.offsetTop);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative">
      <HomeSitemap
        sections={sections}
        activeSection={activeSection}
        visible={showSitemap}
      />

      <div className="relative h-[200vh]">
        <CircleLanding />
      </div>

      <ProjectsSection />

      <AboutPage />

      <HomeSection id="skills" className="relative z-20 bg-black">
        <div className="w-full">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-white/40">
            Skills
          </p>

          <h2 className="text-7xl font-bold tracking-tight">
            WHAT I BUILD WITH
          </h2>

          <div className="mt-16 grid grid-cols-2 gap-x-12 gap-y-6 md:grid-cols-4">
            <span className="text-xl text-white/70">C++</span>
            <span className="text-xl text-white/70">Python</span>
            <span className="text-xl text-white/70">JavaScript</span>
            <span className="text-xl text-white/70">TypeScript</span>
            <span className="text-xl text-white/70">React</span>
            <span className="text-xl text-white/70">Next.js</span>
            <span className="text-xl text-white/70">Node.js</span>
            <span className="text-xl text-white/70">FastAPI</span>
          </div>
        </div>
      </HomeSection>

      <HomeSection id="personal" className="relative z-20 bg-black">
        <div className="w-full">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-white/40">
            Personal
          </p>

          <h2 className="text-7xl font-bold tracking-tight">BEYOND THE CODE</h2>

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white/50">
            Things I enjoy outside of building software.
          </p>

          <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="border border-white/10 p-6">
              <p className="text-lg">Music</p>
            </div>

            <div className="border border-white/10 p-6">
              <p className="text-lg">Movies</p>
            </div>

            <div className="border border-white/10 p-6">
              <p className="text-lg">Games</p>
            </div>

            <div className="border border-white/10 p-6">
              <p className="text-lg">Books</p>
            </div>
          </div>
        </div>
      </HomeSection>

      <HomeSection id="contact" className="relative z-20 bg-black">
        <div className="w-full">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-white/40">
            Contact
          </p>

          <h2 className="text-7xl font-bold tracking-tight">
            LET&apos;S BUILD
            <br />
            SOMETHING.
          </h2>

          <div className="mt-12 flex flex-wrap gap-8 text-sm uppercase tracking-[0.2em]">
            <a
              href="mailto:your@email.com"
              className="text-white/50 transition hover:text-white"
            >
              Email
            </a>

            <a href="#" className="text-white/50 transition hover:text-white">
              GitHub
            </a>

            <a href="#" className="text-white/50 transition hover:text-white">
              LinkedIn
            </a>
          </div>
        </div>
      </HomeSection>
    </main>
  );
}
