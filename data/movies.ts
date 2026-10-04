export type MovieType = "Movie" | "Series" | "Drama" | "Anime";

export type MovieItem = {
  title: string;
  meta: string;
  type: MovieType;
  favorite?: boolean;
  opinion?: string;
};

export const movies = {
  watched: [
    {
      title: "Movie / Show One",
      meta: "2026 · Drama",
      type: "Drama",
      favorite: true,
      opinion: "My opinion about this movie or show will go here.",
    },
    {
      title: "Movie / Show Two",
      meta: "2025 · Sci-Fi",
      type: "Movie",
      favorite: true,
      opinion: "My opinion about this movie or show will go here.",
    },
    {
      title: "Movie / Show Three",
      meta: "2024 · Thriller",
      type: "Series",
      favorite: true,
      opinion: "My opinion about this movie or show will go here.",
    },
    {
      title: "Movie / Show Four",
      meta: "2023 · Animation",
      type: "Movie",
      favorite: false,
      opinion: "My opinion about this movie or show will go here.",
    },
  ] as MovieItem[],

  nextUp: [
    {
      title: "Movie / Show One",
      meta: "2026 · Drama",
      type: "Drama",
    },
    {
      title: "Movie / Show Two",
      meta: "2025 · Sci-Fi",
      type: "Movie",
    },
    {
      title: "Movie / Show Three",
      meta: "2024 · Thriller",
      type: "Series",
    },
    {
      title: "Movie / Show Four",
      meta: "2023 · Animation",
      type: "Movie",
    },
  ] as MovieItem[],
};