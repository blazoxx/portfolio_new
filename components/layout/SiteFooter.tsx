import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Personal", href: "/personal" },
  { label: "Playground", href: "/playground" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black">
      {/* Navigation */}
      <div className="mx-auto w-full max-w-7xl px-6 py-16">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/30">
              Navigate
            </p>

            <nav className="mt-6 grid grid-cols-2 gap-x-12 gap-y-4 text-sm text-white/40 sm:grid-cols-4">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="md:text-right">
            <p className="text-xs uppercase tracking-[0.3em] text-white/30">
              Say hello
            </p>

            <a
              href="mailto:your@email.com"
              className="mt-6 block text-sm text-white/50 transition hover:text-white"
            >
              your@email.com
            </a>
          </div>
        </div>
      </div>

      {/* Giant Name */}
      <div className="relative px-4 pt-16">
        <div className="pointer-events-none select-none text-center">
          <h2
            className="bg-linear-to-r from-emerald-300 via-cyan-300 to-violet-500 bg-clip-text text-[24vw] font-black leading-[0.72] tracking-[-0.08em] text-transparent"
          >
            theB
          </h2>
        </div>

        {/* Glow */}
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-40 w-[70%] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[100px]" />
      </div>

      {/* Bottom metadata */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-4 border-t border-white/10 px-6 py-6 text-[10px] uppercase tracking-[0.2em] text-white/20 sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 theB</span>

        <span>Software Engineer · AI · Builder</span>

        <span>Built with Next.js</span>
      </div>
    </footer>
  );
}