import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { code } = await request.json();

    if (!code) {
      return NextResponse.json(
        { error: "Authorization code is required." },
        { status: 400 },
      );
    }

    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
    const redirectUri = process.env.SPOTIFY_REDIRECT_URI;

    if (!clientId || !clientSecret || !redirectUri) {
      return NextResponse.json(
        { error: "Spotify environment variables are missing." },
        { status: 500 },
      );
    }

    const credentials = Buffer.from(
      `${clientId}:${clientSecret}`,
    ).toString("base64");

    const response = await fetch(
      "https://accounts.spotify.com/api/token",
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${credentials}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          grant_type: "authorization_code",
          code,
          redirect_uri: redirectUri,
        }),
      },
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Spotify token error:", data);

      return NextResponse.json(
        { error: "Failed to authenticate with Spotify." },
        { status: response.status },
      );
    }

    return NextResponse.json({
      success: true,
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
      expiresIn: data.expires_in,
    });
  } catch (error) {
    console.error("Spotify callback error:", error);

    return NextResponse.json(
      { error: "Spotify authentication failed." },
      { status: 500 },
    );
  }
}