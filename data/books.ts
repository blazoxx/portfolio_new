export type BookItem = {
  title: string;
  author?: string;
  year?: string;
  cover?: string;
  note?: string;
};

export const books = {
  featured: {
    title: "Atomic Habits",
    note: "A book I keep coming back to.",
  } as BookItem,

  reading: null as BookItem | null,

  library: [
    {
      title: "Atomic Habits",
      note: "Simple, practical, and useful.",
    },
  ] as BookItem[],
};