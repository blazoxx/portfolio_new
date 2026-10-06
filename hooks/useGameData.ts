"use client";

import { useEffect, useState } from "react";
import type { GameItem } from "@/data/games";

export type GameData = GameItem & {
  details?: string;
};

export function useGameData(game: GameItem | null) {
  const [loaded, setLoaded] = useState<{
    title: string;
    data: GameData;
  } | null>(() => (game ? { title: game.title, data: game } : null));

  useEffect(() => {
    if (!game) {
      return;
    }

    let cancelled = false;
    const selectedGame = game;

    async function loadGame() {
      try {
        const response = await fetch(
          `/api/games?title=${encodeURIComponent(selectedGame.title)}`,
        );

        if (!response.ok) {
          return;
        }

        const result = await response.json();

        if (!cancelled) {
          setLoaded({
            title: selectedGame.title,
            data: {
              ...selectedGame,
              title: result.title ?? selectedGame.title,
              year: result.year ?? selectedGame.year,
              genre: result.genre ?? selectedGame.genre,
              platform: result.platform ?? selectedGame.platform,
              poster: result.poster ?? selectedGame.poster,
              details: result.details,
            },
          });
        }
      } catch {
        // Keep original data if IGDB fails.
      }
    }

    loadGame();

    return () => {
      cancelled = true;
    };
  }, [game]);

  return game && loaded?.title === game.title ? loaded.data : game;
}