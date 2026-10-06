import { NextResponse } from "next/server";

const OPEN_LIBRARY_URL = "https://openlibrary.org/search.json";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get("title");

    if (!title) {
      return NextResponse.json(
        { error: "Book title is required." },
        { status: 400 },
      );
    }

    const response = await fetch(
      `${OPEN_LIBRARY_URL}?title=${encodeURIComponent(title)}&limit=1`,
      {
        next: {
          revalidate: 86400,
        },
      },
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch book data." },
        { status: response.status },
      );
    }

    const data = await response.json();

    if (!data.docs?.length) {
      return NextResponse.json(
        { error: "Book not found." },
        { status: 404 },
      );
    }

    const book = data.docs[0];

    return NextResponse.json({
      title: book.title,

      author: book.author_name?.[0],

      year: book.first_publish_year?.toString(),

      cover: book.cover_i
        ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
        : undefined,
    });
  } catch (error) {
    console.error("Open Library error:", error);

    return NextResponse.json(
      { error: "Failed to fetch book data." },
      { status: 500 },
    );
  }
}