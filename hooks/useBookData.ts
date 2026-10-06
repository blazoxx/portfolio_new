"use client";

import { useEffect, useState } from "react";
import type { BookItem } from "@/data/books";

export type BookData = BookItem;

export function useBookData(book: BookItem | null): BookData | null;
export function useBookData(book: BookItem[]): BookData[];

export function useBookData(
  book: BookItem | BookItem[] | null,
): BookData | BookData[] | null {
  const [loaded, setLoaded] = useState<{
    source: BookItem | BookItem[] | null;
    data: BookData | BookData[] | null;
  }>({
    source: book,
    data: book,
  });

  useEffect(() => {
    if (!book) {
      return;
    }

    const currentBooks = Array.isArray(book) ? book : [book];

    let cancelled = false;

    async function loadBooks() {
      const results = await Promise.all(
        currentBooks.map(async (currentBook) => {
          try {
            const response = await fetch(
              `/api/books?title=${encodeURIComponent(currentBook.title)}`,
            );

            if (!response.ok) {
              return currentBook;
            }

            const result = await response.json();

            return {
              ...currentBook,
              title: result.title ?? currentBook.title,
              author: result.author ?? currentBook.author,
              year: result.year ?? currentBook.year,
              cover: result.cover ?? currentBook.cover,
            };
          } catch {
            return currentBook;
          }
        }),
      );

      if (!cancelled) {
        setLoaded({
          source: book,
          data: Array.isArray(book) ? results : results[0],
        });
      }
    }

    loadBooks();

    return () => {
      cancelled = true;
    };
  }, [book]);

  if (book === loaded.source) {
    return loaded.data;
  }

  return Array.isArray(book)
    ? book
    : book;
}