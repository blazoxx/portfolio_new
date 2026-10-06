"use client";

import { useState } from "react";
import { books, type BookItem } from "@/data/books";
import { useBookData } from "@/hooks/useBookData";

export default function BooksPage() {
  const [selectedBook, setSelectedBook] = useState<BookItem | null>(null);
  const selectedBookData = useBookData(selectedBook);

  return (
    <main className="bg-black text-white">
      {/* Slide 01 — Featured */}
      <section className="min-h-screen snap-start px-6 py-16">
        <div className="mx-auto flex min-h-[calc(100vh-8rem)] w-full max-w-7xl items-center">
          {books.featured ? (
            <button
              type="button"
              onClick={() => setSelectedBook(books.featured)}
              className="group grid w-full gap-12 text-left md:grid-cols-[280px_1fr] md:items-center"
            >
              <div className="aspect-[2/3] overflow-hidden bg-white/[0.03]">
                {books.featured.cover ? (
                  <img
                    src={books.featured.cover}
                    alt={books.featured.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-xs uppercase tracking-[0.2em] text-white/20">
                    No Cover
                  </div>
                )}
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                  Personal · Books
                </p>

                <p className="mt-8 text-xs uppercase tracking-[0.3em] text-white/30">
                  Featured
                </p>

                <h1 className="mt-4 text-6xl font-bold tracking-tight md:text-8xl">
                  {books.featured.title}
                </h1>

                <p className="mt-4 text-lg text-white/50">
                  {books.featured.author}
                  {books.featured.year && ` · ${books.featured.year}`}
                </p>

                {books.featured.note && (
                  <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/40">
                    {books.featured.note}
                  </p>
                )}
              </div>
            </button>
          ) : (
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                Personal · Books
              </p>

              <h1 className="mt-6 text-7xl font-bold tracking-tight md:text-9xl">
                WORDS
                <br />I KEEP.
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/40">
                Books I&apos;ve read, books I&apos;m reading, and books that
                stayed with me.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Slide 02 — Currently Reading */}
      <section className="min-h-screen snap-start px-6 py-32">
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-white/30">
            Right now
          </p>

          <h2 className="mt-6 text-6xl font-bold tracking-tight md:text-8xl">
            READING.
          </h2>

          {books.reading ? (
            <button
              type="button"
              onClick={() => setSelectedBook(books.reading)}
              className="group mt-16 grid w-full gap-10 border-t border-white/10 pt-10 text-left md:grid-cols-[180px_1fr] md:items-center"
            >
              <div className="aspect-[2/3] overflow-hidden bg-white/[0.03]">
                {books.reading.cover ? (
                  <img
                    src={books.reading.cover}
                    alt={books.reading.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-xs uppercase tracking-[0.2em] text-white/20">
                    No Cover
                  </div>
                )}
              </div>

              <div>
                <h3 className="text-4xl font-medium tracking-tight md:text-6xl">
                  {books.reading.title}
                </h3>

                <p className="mt-3 text-sm uppercase tracking-[0.2em] text-white/30">
                  {books.reading.author}
                  {books.reading.year && ` · ${books.reading.year}`}
                </p>

                {books.reading.note && (
                  <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/40">
                    {books.reading.note}
                  </p>
                )}
              </div>
            </button>
          ) : (
            <div className="mt-16 border-t border-white/10 py-12">
              <p className="text-sm uppercase tracking-[0.2em] text-white/25">
                Nothing currently reading.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Slide 03 — Library */}
      <section className="min-h-screen snap-start px-6 py-32">
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-white/30">
            Archive
          </p>

          <h2 className="mt-6 text-6xl font-bold tracking-tight md:text-8xl">
            LIBRARY.
          </h2>

          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/25">
            {books.library.length}{" "}
            {books.library.length === 1 ? "book" : "books"}
          </p>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {books.library.map((book, index) => (
              <button
                key={`${book.title}-${index}`}
                type="button"
                onClick={() => setSelectedBook(book)}
                className="group relative overflow-hidden border border-white/10 bg-white/[0.02] text-left transition duration-500 hover:-translate-y-1 hover:border-white/20"
              >
                <div className="relative aspect-[2/3] overflow-hidden bg-white/[0.03]">
                  {book.cover ? (
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="block h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center px-4 text-center text-xs uppercase tracking-[0.2em] text-white/20">
                      No Cover
                    </div>
                  )}

                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-black/70 to-transparent p-5 opacity-0 transition duration-300 group-hover:opacity-100">
                    <p className="text-lg font-medium">{book.title}</p>

                    <p className="mt-1 text-xs uppercase tracking-[0.15em] text-white/50">
                      {book.author}
                    </p>

                    {book.note && (
                      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-white/60">
                        {book.note}
                      </p>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {books.library.length === 0 && (
            <div className="border-t border-white/10 py-16">
              <p className="text-sm uppercase tracking-[0.2em] text-white/25">
                Library is empty.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Book Modal */}
      {selectedBookData && !Array.isArray(selectedBookData) && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4">
          <div className="relative h-[92vh] w-full max-w-5xl overflow-hidden border border-white/10 bg-black">
            <button
              type="button"
              onClick={() => setSelectedBook(null)}
              aria-label="Close book details"
              className="absolute right-6 top-6 z-20 flex h-10 w-10 items-center justify-center border border-white/20 bg-black/40 text-xl text-white/70 transition hover:border-white/40 hover:text-white"
            >
              ×
            </button>

            {selectedBookData.cover && (
              <img
                src={selectedBookData.cover}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-25 blur-[2px]"
              />
            )}

            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/20" />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

            <div className="relative flex h-full items-end p-8 md:p-12">
              <div className="max-w-3xl">
                <p className="text-xs uppercase tracking-[0.25em] text-white/50">
                  {selectedBookData.author}
                  {selectedBookData.year && ` · ${selectedBookData.year}`}
                </p>

                <h2 className="mt-3 text-5xl font-semibold tracking-tight md:text-7xl">
                  {selectedBookData.title}
                </h2>

                {selectedBookData.note && (
                  <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
                    {selectedBookData.note}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
