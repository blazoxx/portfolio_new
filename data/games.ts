export type GameItem = {
  title: string;
  platform?: string;
  year?: string;
  genre?: string;

  poster?: string;

  favorite?: boolean;
  myRating?: number;
  myOpinion?: string;
};

export const games = {
  played: [
    {
    title: "Red Dead Redemption 2",
    platform: "PC",
    year: "2018",
    genre: "Action · Adventure",

    poster: "POSTER_URL",

    favorite: true,
    myRating: 5,
    myOpinion:
      "One of the most immersive worlds I've ever played.",
  },

  {
    title: "The Witcher 3: Wild Hunt",
    platform: "PC",
    year: "2015",
    genre: "RPG · Action",

    poster: "POSTER_URL",

    favorite: true,
    myRating: 5,
    myOpinion:
      "An incredible open world with some of the best side quests I've played.",
  },

  {
    title: "Grand Theft Auto V",
    platform: "PC",
    year: "2013",
    genre: "Action · Open World",

    poster: "POSTER_URL",

    favorite: true,
    myRating: 4.5,
    myOpinion:
      "Still ridiculously fun to explore, drive around, and cause absolute chaos.",
  },

  {
    title: "Minecraft",
    platform: "PC",
    year: "2011",
    genre: "Sandbox · Survival",

    poster: "POSTER_URL",

    favorite: true,
    myRating: 5,
    myOpinion:
      "Infinite creativity disguised as a game. There is always something to build.",
  },

  {
    title: "Elden Ring",
    platform: "PC",
    year: "2022",
    genre: "Action · RPG",

    poster: "POSTER_URL",

    favorite: true,
    myRating: 4.5,
    myOpinion:
      "Massive, mysterious, and brutally rewarding. Exploration is the real game.",
  },

  {
    title: "God of War",
    platform: "PC",
    year: "2018",
    genre: "Action · Adventure",

    poster: "POSTER_URL",

    favorite: true,
    myRating: 4.5,
    myOpinion:
      "A surprisingly emotional journey wrapped inside excellent combat and exploration.",
  },

  {
    title: "Hollow Knight",
    platform: "PC",
    year: "2017",
    genre: "Metroidvania · Action",

    poster: "POSTER_URL",

    favorite: true,
    myRating: 5,
    myOpinion:
      "Beautiful, atmospheric, difficult, and incredibly satisfying to explore.",
  },

  {
    title: "Portal 2",
    platform: "PC",
    year: "2011",
    genre: "Puzzle · Adventure",

    poster: "POSTER_URL",

    favorite: true,
    myRating: 5,
    myOpinion:
      "Smart puzzles, hilarious writing, and one of the best co-op experiences.",
  },

  {
    title: "Hades",
    platform: "PC",
    year: "2020",
    genre: "Roguelike · Action",

    poster: "POSTER_URL",

    favorite: true,
    myRating: 4.5,
    myOpinion:
      "The rare roguelike where dying actually makes you want to keep playing.",
  },

  {
    title: "Cyberpunk 2077",
    platform: "PC",
    year: "2020",
    genre: "RPG · Open World",

    poster: "POSTER_URL",

    favorite: false,
    myRating: 4,
    myOpinion:
      "A flawed launch story, but Night City eventually became an incredible world to explore.",
  },

  {
    title: "Sekiro: Shadows Die Twice",
    platform: "PC",
    year: "2019",
    genre: "Action · Adventure",

    poster: "POSTER_URL",

    favorite: true,
    myRating: 4.5,
    myOpinion:
      "Combat feels incredible once the rhythm finally clicks.",
  },

  {
    title: "Valorant",
    platform: "PC",
    year: "2020",
    genre: "FPS · Tactical",

    poster: "POSTER_URL",

    favorite: false,
    myRating: 4,
    myOpinion:
      "Extremely satisfying when teamwork and aim actually come together.",
  },
  ] as GameItem[],

  nextUp: [] as GameItem[],
};