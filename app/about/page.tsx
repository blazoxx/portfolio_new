import ScrollRevealText from "@/components/about/ScrollRevealText";

export default function AboutPage() {
  return (
    <section
      id="about"
      className="relative z-40 min-h-[250vh] bg-black"
    >
      <div className="sticky top-0 flex h-screen items-center">
        <div className="mx-auto w-full max-w-7xl px-6">
          <p className="mb-8 text-sm uppercase tracking-[0.3em] text-white/40">
            About
          </p>

          <ScrollRevealText text="I build software, explore AI, and turn ideas into things people can use." />
        </div>
      </div>
    </section>
  );
}