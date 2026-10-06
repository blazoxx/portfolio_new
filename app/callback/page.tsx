"use client";

import { useEffect, useState } from "react";

export default function SpotifyCallbackPage() {
  const [status, setStatus] = useState("Connecting Spotify...");

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      const code = new URLSearchParams(window.location.search).get("code");
      const error = new URLSearchParams(window.location.search).get("error");

      if (error) {
        setStatus(`Spotify authorization failed: ${error}`);
        return;
      }

      if (!code) {
        setStatus("No Spotify authorization code found.");
        return;
      }

      async function exchangeCode() {
        try {
          const response = await fetch("/api/spotify/callback", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ code }),
          });

          const result = await response.json();

          if (!response.ok) {
            setStatus(result.error ?? "Spotify connection failed.");
            return;
          }

          setStatus("Spotify connected successfully.");
        } catch {
          setStatus("Something went wrong connecting Spotify.");
        }
      }

      exchangeCode();
    }, 0);

    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white">
      <p className="text-sm uppercase tracking-[0.2em] text-white/50">
        {status}
      </p>
    </main>
  );
}