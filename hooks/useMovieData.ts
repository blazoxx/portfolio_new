"use client";

import { useEffect, useState } from "react";
import type { MovieItem } from "@/data/movies";

type OMDbMovie = {
  poster?: string;
  year?: string;
  genre?: string;
  details?: string;
  imdbRating?: number;
};

export function useMovieData(movie: MovieItem | null) {
  const [data, setData] = useState<{
    movieTitle: string;
    value: OMDbMovie;
  } | null>(null);

  useEffect(() => {
    if (!movie) {
      return;
    }

    const movieTitle = movie.title;
    let cancelled = false;

    async function loadMovie() {
      try {
        const response = await fetch(
          `/api/movies?title=${encodeURIComponent(movieTitle)}`,
        );

        if (!response.ok) return;

        const result = await response.json();

        if (!cancelled) {
          setData({ movieTitle, value: result });
        }
      } catch {
        // Keep original data if OMDb fails.
      }
    }

    loadMovie();

    return () => {
      cancelled = true;
    };
  }, [movie]);

  if (!movie) {
    return null;
  }

  const movieData = data?.movieTitle === movie.title ? data.value : null;

  return {
    ...movie,
    poster: movieData?.poster ?? movie.poster,
    year: movieData?.year ?? movie.year,
    genre: movieData?.genre ?? movie.genre,
    details: movieData?.details ?? movie.details,
    imdbRating: movieData?.imdbRating ?? movie.imdbRating,
  };
}