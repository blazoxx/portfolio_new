import { NextResponse } from "next/server";

const OMDB_URL = "https://www.omdbapi.com/";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title");

  if (!title) {
    return NextResponse.json(
      { error: "Title is required." },
      { status: 400 },
    );
  }

  const response = await fetch(
    `${OMDB_URL}?apikey=${process.env.OMDB_API_KEY}&t=${encodeURIComponent(title)}&plot=full`,
    {
      next: {
        revalidate: 86400,
      },
    },
  );

  if (!response.ok) {
    return NextResponse.json(
      { error: "Failed to fetch movie data." },
      { status: response.status },
    );
  }

  const movie = await response.json();

  if (movie.Response === "False") {
    return NextResponse.json(
      { error: movie.Error ?? "Movie not found." },
      { status: 404 },
    );
  }

  return NextResponse.json({
    title: movie.Title,
    year: movie.Year,
    genre: movie.Genre,
    details: movie.Plot,
    imdbRating:
      movie.imdbRating !== "N/A"
        ? Number(movie.imdbRating)
        : undefined,
    poster:
      movie.Poster !== "N/A"
        ? movie.Poster
        : undefined,
    imdbId: movie.imdbID,
  });
}