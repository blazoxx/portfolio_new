import Link from "next/link";
import { books } from "@/data/books";

export default function BooksPage() {
  return (
    <main className="bg-black text-white">
      {/* Slide 01 — Featured */}
      <section className="min-h-screen snap-start px-6 py-16">
        <div className="mx-auto flex min-h-[calc(100vh-8rem)] w-full max-w-7xl items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/30">
              Personal · Books
            </p>

            <h1 className="mt-6 text-7xl font-bold tracking-tight md:text-9xl">
              THINGS
              <br />
              I READ.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/40">
              Books, ideas, and words worth keeping around.
            </p>
          </div>
        </div>
      </section>

      {/* Slide 02 — Currently Reading */}
      <section className="min-h-screen snap-start px-6 py-32">
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-white/30">
            Currently
          </p>

          <h2 className="mt-6 text-6xl font-bold tracking-tight md:text-8xl">
            READING.
          </h2>

          <div className="mt-16">
            {books.reading ? (
              <div className="grid gap-10 border-t border-white/10 pt-10 md:grid-cols-[240px_1fr]">
                <div className="aspect-[2/3] border border-white/10 bg-white/[0.03]" />

                <div className="flex flex-col justify-center">
                  <p className="text-xs uppercase tracking-[0.25em] text-white/30">
                    {books.reading.year}
                  </p>

                  <h3 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
                    {books.reading.title}
                  </h3>

                  <p className="mt-3 text-lg text-white/40">
                    {books.reading.author}
                  </p>

                  {books.reading.note && (
                    <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/50">
                      {books.reading.note}
                    </p>
                  )}
                </div>
              </div>
            ) : (
              <div className="border-t border-white/10 py-12 text-sm text-white/25">
                Nothing currently reading.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Slide 03 — Library */}
      <section className="min-h-screen snap-start px-6 py-32">
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-white/30">
            Library
          </p>

          <h2 className="mt-6 text-6xl font-bold tracking-tight md:text-8xl">
            BOOKS
            <br />
            I KEEP.
          </h2>

          <div className="mt-16 border-t border-white/10">
            {books.library.length > 0 ? (
              books.library.map((book, index) => (
                <div
                  key={`${book.title}-${index}`}
                  className="group grid gap-6 border-b border-white/10 py-8 transition hover:bg-white/[0.03] md:grid-cols-[80px_1fr_auto] md:items-center"
                >
                  <span className="text-sm text-white/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="text-2xl font-medium tracking-tight transition group-hover:translate-x-2 md:text-4xl">
                      {book.title}
                    </h3>

                    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/30">
                      {book.author}
                      {book.year && ` · ${book.year}`}
                    </p>
                  </div>

                  {book.note && (
                    <p className="max-w-sm text-sm text-white/30">
                      {book.note}
                    </p>
                  )}
                </div>
              ))
            ) : (
              <div className="py-12 text-sm text-white/25">
                No books added yet.
              </div>
            )}
          </div>

          <Link
            href="/personal"
            className="mt-12 inline-block text-sm text-white/35 transition hover:text-white"
          >
            ← Back to Personal
          </Link>
        </div>
      </section>
    </main>
  );
}