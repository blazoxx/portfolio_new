import Link from "next/link";
import { profile } from "@/data/profile";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="px-6 pb-24 pt-36">
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-white/30">
            Contact
          </p>

          <h1 className="mt-8 max-w-6xl text-7xl font-bold tracking-tight md:text-9xl">
            LET&apos;S
            <br />
            BUILD
            <br />
            SOMETHING.
          </h1>

          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-white/40">
            Have an idea, project, opportunity, or just want to talk about
            something interesting?
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="border-y border-white/10 px-6 py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-12 md:grid-cols-[220px_1fr]">
          <p className="text-xs uppercase tracking-[0.3em] text-white/30">
            Reach me
          </p>

          <div className="space-y-8">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>

            <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm uppercase tracking-[0.2em] text-white/30">
              <a href={profile.socials.github} target="_blank" rel="noreferrer">
                GitHub
              </a>

              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a href="#" className="transition hover:text-white">
                X / Twitter
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Availability */}
      <section className="px-6 py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-12 md:grid-cols-[220px_1fr]">
          <p className="text-xs uppercase tracking-[0.3em] text-white/30">
            Currently
          </p>

          <div>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />

              <p className="text-sm uppercase tracking-[0.2em] text-white/50">
                Open to opportunities
              </p>
            </div>

            <p className="mt-6 max-w-3xl text-2xl leading-relaxed text-white/50 md:text-3xl">
              Interested in software engineering, AI, research, and building
              useful products.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-white/30">
            Send a message
          </p>

          <form className="mt-12 max-w-3xl space-y-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="text-xs uppercase tracking-[0.2em] text-white/30"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="mt-3 w-full border-b border-white/10 bg-transparent px-0 py-4 text-white outline-none placeholder:text-white/20 focus:border-white/40"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-xs uppercase tracking-[0.2em] text-white/30"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="mt-3 w-full border-b border-white/10 bg-transparent px-0 py-4 text-white outline-none placeholder:text-white/20 focus:border-white/40"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="text-xs uppercase tracking-[0.2em] text-white/30"
              >
                Message
              </label>

              <textarea
                id="message"
                rows={6}
                placeholder="Tell me what's on your mind..."
                className="mt-3 w-full resize-none border-b border-white/10 bg-transparent px-0 py-4 text-white outline-none placeholder:text-white/20 focus:border-white/40"
              />
            </div>

            <button
              type="submit"
              className="border border-white/20 px-7 py-4 text-xs uppercase tracking-[0.2em] text-white/60 transition hover:border-white hover:bg-white hover:text-black"
            >
              Send Message →
            </button>
          </form>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-white/10 px-6 py-32">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/30">
              Back to the beginning
            </p>

            <h2 className="mt-5 text-5xl font-bold tracking-tight md:text-7xl">
              KEEP
              <br />
              EXPLORING.
            </h2>
          </div>

          <Link
            href="/"
            className="text-sm uppercase tracking-[0.2em] text-white/40 transition hover:text-white"
          >
            Return Home →
          </Link>
        </div>
      </section>
    </main>
  );
}
