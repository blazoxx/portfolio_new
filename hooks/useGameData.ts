"use client";

import { useEffect, useState } from "react";
import type { GameItem } from "@/data/games";

export type GameData = GameItem & {
  details?: string;
};

export function useGameData(
  game: GameItem | null,
): GameData | null;

export function useGameData(
  game: GameItem[],
): GameData[];

export function useGameData(
  game: GameItem | GameItem[] | null,
) {
  const [loaded, setLoaded] = useState<GameData[]>(() => {
    if (!game) {
      return [];
    }

    return Array.isArray(game) ? game : [game];
  });

  useEffect(() => {
    if (!game) {
      return;
    }

    const games = Array.isArray(game) ? game : [game];

    let cancelled = false;

    async function loadGames() {
      const results = await Promise.all(
        games.map(async (selectedGame) => {
          try {
            const response = await fetch(
              `/api/games?title=${encodeURIComponent(selectedGame.title)}`,
            );

            if (!response.ok) {
              return selectedGame;
            }

            const result = await response.json();

            return {
              ...selectedGame,
              title: result.title ?? selectedGame.title,
              year: result.year ?? selectedGame.year,
              genre: result.genre ?? selectedGame.genre,
              platform: result.platform ?? selectedGame.platform,
              poster: result.poster ?? selectedGame.poster,
              details: result.details,
            };
          } catch {
            return selectedGame;
          }
        }),
      );

      if (!cancelled) {
        setLoaded(results);
      }
    }

    loadGames();

    return () => {
      cancelled = true;
    };
  }, [game]);

  if (!game) {
    return null;
  }

  if (Array.isArray(game)) {
    return loaded;
  }

  const selected = loaded.find(
    (item) => item.title === game.title,
  );

  return selected ?? game;
}