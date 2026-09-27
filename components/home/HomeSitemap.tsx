type HomeSection = {
  id: string;
  label: string;
};

type HomeSitemapProps = {
  sections: HomeSection[];
  activeSection: string;
  visible: boolean;
};

export default function HomeSitemap({
  sections,
  activeSection,
  visible,
}: HomeSitemapProps) {
  if (!visible) return null;

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <aside className="pointer-events-none fixed inset-y-0 left-0 z-30 flex items-center">
      <div className="pointer-events-auto relative ml-6 flex flex-col gap-8">
        <div className="absolute left-[3px] top-1 bottom-1 w-px bg-white/15" />
        
        {sections.map((section) => {
          const active = section.id === activeSection;

          return (
            <button
              key={section.id}
              type="button"
              onClick={() => scrollToSection(section.id)}
              className="group relative flex items-center gap-4"
            >
              <span
                className={`relative z-10 h-2 w-2 rounded-full border transition ${
                  active
                    ? "border-white bg-white"
                    : "border-white/40 bg-black group-hover:border-white"
                }`}
              />

              <span
                className={`text-xs uppercase tracking-[0.2em] transition ${
                  active
                    ? "text-white"
                    : "text-white/30 group-hover:text-white/70"
                }`}
              >
                {section.label}
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
