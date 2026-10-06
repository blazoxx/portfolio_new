import { NextResponse } from "next/server";

const TWITCH_TOKEN_URL =
  "https://id.twitch.tv/oauth2/token";

const IGDB_URL =
  "https://api.igdb.com/v4/games";

async function getAccessToken() {
  const response = await fetch(
    `${TWITCH_TOKEN_URL}?client_id=${process.env.TWITCH_CLIENT_ID}&client_secret=${process.env.TWITCH_CLIENT_SECRET}&grant_type=client_credentials`,
    {
      method: "POST",
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error("Failed to authenticate with Twitch.");
  }

  const data = await response.json();

  return data.access_token;
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get("title");

    if (!title) {
      return NextResponse.json(
        { error: "Game title is required." },
        { status: 400 },
      );
    }

    const accessToken = await getAccessToken();

    const query = `
      search "${title.replace(/"/g, '\\"')}";
      fields
        name,
        first_release_date,
        genres.name,
        platforms.name,
        summary,
        cover.image_id;
      limit 1;
    `;

    const response = await fetch(IGDB_URL, {
      method: "POST",
      headers: {
        "Client-ID": process.env.TWITCH_CLIENT_ID!,
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "text/plain",
      },
      body: query,
      next: {
        revalidate: 86400,
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch game data." },
        { status: response.status },
      );
    }

    const games = await response.json();

    if (!games.length) {
      return NextResponse.json(
        { error: "Game not found." },
        { status: 404 },
      );
    }

    const game = games[0];

    return NextResponse.json({
      title: game.name,

      year: game.first_release_date
        ? new Date(
            game.first_release_date * 1000,
          ).getFullYear().toString()
        : undefined,

      genre: game.genres
        ?.map((genre: { name: string }) => genre.name)
        .join(", "),

      platform: game.platforms
        ?.map((platform: { name: string }) => platform.name)
        .join(", "),

      details: game.summary,

      poster: game.cover?.image_id
        ? `https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover.image_id}.jpg`
        : undefined,
    });
  } catch (error) {
    console.error("IGDB error:", error);

    return NextResponse.json(
      { error: "Failed to fetch game data." },
      { status: 500 },
    );
  }
}