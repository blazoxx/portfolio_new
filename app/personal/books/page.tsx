const books = [
  {
    number: "01",
    title: "Book One",
    author: "Author Name",
    meta: "2026 · Non-fiction",
  },
  {
    number: "02",
    title: "Book Two",
    author: "Author Name",
    meta: "2025 · Fiction",
  },
  {
    number: "03",
    title: "Book Three",
    author: "Author Name",
    meta: "2024 · Psychology",
  },
  {
    number: "04",
    title: "Book Four",
    author: "Author Name",
    meta: "2023 · Technology",
  },
];

const nextBooks = [
  {
    number: "01",
    title: "Book To Read One",
    author: "Author Name",
    meta: "Fiction",
  },
  {
    number: "02",
    title: "Book To Read Two",
    author: "Author Name",
    meta: "Technology",
  },
  {
    number: "03",
    title: "Book To Read Three",
    author: "Author Name",
    meta: "Non-fiction",
  },
];

export default function BooksPage() {
  return (
    <main className="bg-black text-white">
      {/* Slide 01 — Currently Reading */}
      <section className="min-h-screen snap-start px-6 py-16">
        <div className="mx-auto flex min-h-[calc(100vh-8rem)] w-full max-w-7xl items-center">
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.3em] text-white/30">
              Personal · Books
            </p>

            <h1 className="mt-6 text-7xl font-bold tracking-tight md:text-9xl">
              IDEAS
              <br />
              I KEEP
              <br />
              AROUND.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/40">
              Books I&apos;m reading, books I&apos;ve finished, and ideas
              that stayed with me.
            </p>
          </div>
        </div>
      </section>

      {/* Slide 02 — Read */}
      <section className="min-h-screen snap-start px-6 py-32">
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-white/30">
            Archive
          </p>

          <h2 className="mt-6 text-6xl font-bold tracking-tight md:text-8xl">
            READ.
          </h2>

          <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
            {books.map((book) => (
              <div key={book.number} className="group">
                {/* Book Cover */}
                <div className="aspect-[2/3] border border-white/10 bg-white/[0.03] transition group-hover:border-white/30">
                  <div className="flex h-full items-center justify-center p-6">
                    <span className="text-center text-xs uppercase tracking-[0.2em] text-white/20">
                      Book Cover
                    </span>
                  </div>
                </div>

                {/* Book Info */}
                <div className="mt-5">
                  <h3 className="text-xl font-medium tracking-tight">
                    {book.title}
                  </h3>

                  <p className="mt-2 text-sm text-white/40">
                    {book.author}
                  </p>

                  <p className="mt-2 text-xs uppercase tracking-[0.15em] text-white/25">
                    {book.meta}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slide 03 — Next Up */}
      <section className="min-h-screen snap-start px-6 py-32">
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-white/30">
            Queue
          </p>

          <h2 className="mt-6 text-6xl font-bold tracking-tight md:text-8xl">
            NEXT UP.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/40">
            Books waiting to be opened.
          </p>

          <div className="mt-16 border-t border-white/10">
            {nextBooks.map((book) => (
              <div
                key={book.number}
                className="group grid gap-6 border-b border-white/10 py-8 transition hover:bg-white/[0.03] md:grid-cols-[80px_1fr_auto] md:items-center"
              >
                <span className="text-sm text-white/25">
                  {book.number}
                </span>

                <div>
                  <h3 className="text-2xl font-medium tracking-tight transition group-hover:translate-x-2 md:text-4xl">
                    {book.title}
                  </h3>

                  <p className="mt-2 text-sm text-white/40">
                    {book.author}
                  </p>

                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/25">
                    {book.meta}
                  </p>
                </div>

                <span className="text-sm text-white/25">
                  →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}