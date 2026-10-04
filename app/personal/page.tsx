import Link from "next/link";
import { personalCategories } from "@/data/personal";

export default function PersonalPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-32">
      <div className="mx-auto w-full max-w-7xl">
        <p className="text-sm uppercase tracking-[0.3em] text-white/40">
          Personal
        </p>

        <h1 className="mt-6 text-7xl font-bold tracking-tight md:text-9xl">
          BEYOND
          <br />
          THE CODE.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/40">
          The things I watch, play, read, listen to, and keep coming back to.
        </p>

        <div className="mt-24 border-t border-white/10">
          {personalCategories.map((category, index) => (
            <Link
              key={category.href}
              href={category.href}
              className="group grid gap-6 border-b border-white/10 py-12 transition hover:bg-white/[0.03] md:grid-cols-[100px_1fr_auto] md:items-center"
            >
              <span className="text-sm text-white/25">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <h2 className="text-4xl font-semibold tracking-tight transition group-hover:translate-x-2 md:text-6xl">
                  {category.title}
                </h2>

                <p className="mt-3 text-sm text-white/35">
                  {category.description}
                </p>
              </div>

              <span className="text-sm text-white/25 transition group-hover:text-white">
                Explore →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
