export type BookItem = {
  title: string;
  author: string;
  year?: string;
  note?: string;
};

export const books = {
  reading: null as BookItem | null,

  library: [] as BookItem[],
};