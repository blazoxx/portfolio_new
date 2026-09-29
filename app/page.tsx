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
        const active = entries.find((entry) => entry.isIntersecting);

        if (!active) return;

        const sectionId = active.target.id;

        setActiveSection(sectionId);

        window.dispatchEvent(
          new CustomEvent("home-section-change", {
            detail: sectionId,
          }),
        );
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
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

      <div className="relative h-[250vh]">
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
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/40">
            A practical stack built around software engineering, AI, and turning
            ideas into working products.
          </p>

          <div className="mt-16 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2">
            {[
              ["Languages", "C++ · Python · JavaScript · TypeScript"],
              ["Frontend", "React · Next.js · Tailwind CSS"],
              ["Backend", "Node.js · Express · FastAPI"],
              ["AI / ML", "Machine Learning · GenAI · Agentic AI"],
            ].map(([category, skills]) => (
              <div
                key={category}
                className="bg-black p-8 transition duration-500 hover:-translate-y-1 hover:bg-white/[0.03]"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-white/30">
                  {category}
                </p>

                <p className="mt-5 text-xl text-white/70">{skills}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs uppercase tracking-[0.2em] text-white/25">
            <span>Currently exploring</span>
            <span>Agentic AI</span>
            <span>LLM Systems</span>
            <span>Research</span>
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
            The things I watch, play, read, listen to, and keep coming back to.
          </p>

          <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="border border-white/10 p-6 transition hover:-translate-y-1 hover:bg-white/[0.03]">
              <p className="text-lg">Music</p>
              <p className="mt-2 text-sm text-white/30">
                What&apos;s on repeat
              </p>
            </div>

            <div className="border border-white/10 p-6 transition hover:-translate-y-1 hover:bg-white/[0.03]">
              <p className="text-lg">Movies & TV</p>
              <p className="mt-2 text-sm text-white/30">
                Things worth watching
              </p>
            </div>

            <div className="border border-white/10 p-6 transition hover:-translate-y-1 hover:bg-white/[0.03]">
              <p className="text-lg">Games</p>
              <p className="mt-2 text-sm text-white/30">Worlds I get lost in</p>
            </div>

            <div className="border border-white/10 p-6 transition hover:-translate-y-1 hover:bg-white/[0.03]">
              <p className="text-lg">Books</p>
              <p className="mt-2 text-sm text-white/30">Ideas I keep around</p>
            </div>
          </div>
          <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
            <span className="text-xs uppercase tracking-[0.25em] text-white/25">
              Personal Archive
            </span>

            <a
              href="/personal"
              className="text-xs uppercase tracking-[0.2em] text-white/40 transition hover:text-white"
            >
              Explore →
            </a>
          </div>
        </div>
      </HomeSection>

      <HomeSection id="contact" className="relative z-20 bg-black">
        <div className="w-full">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-white/40">
            Contact
          </p>

          <h2 className="text-7xl font-bold tracking-tight md:text-9xl">
            LET&apos;S
            <br />
            BUILD
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
          <p className="mt-20 text-xs uppercase tracking-[0.25em] text-white/20">
            Open to opportunities · collaborations · interesting problems
          </p>
        </div>
      </HomeSection>
    </main>
  );
}
