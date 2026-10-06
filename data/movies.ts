export type MovieType =
  | "Movie"
  | "Series"
  | "Drama"
  | "Anime";

export type MovieItem = {
  title: string;
  meta: string;
  type: MovieType;

  // Visuals
  poster?: string;
  backdrop?: string;

  // Information
  year?: string;
  genre?: string;
  details?: string;
  imdbRating?: number;

  // Personal
  favorite?: boolean;
  myRating?: number;
  myOpinion?: string;
};

export const movies = {
  watched: [
    {
      title: "Interstellar",
      meta: "2014 · Sci-Fi",
      type: "Movie",

      poster: "POSTER_URL",

      year: "2014",
      genre: "Sci-Fi · Drama",
      details:
        "A team of explorers travels through a wormhole in search of a new home for humanity.",
      imdbRating: 8.7,

      favorite: true,
      myRating: 5,
      myOpinion:
        "Massive scale, incredible visuals, and an emotional core that actually works.",
    },

    {
      title: "Inception",
      meta: "2010 · Sci-Fi",
      type: "Movie",

      poster: "POSTER_URL",

      
      year: "2010",
      genre: "Sci-Fi · Thriller",
      details:
        "A skilled thief who steals secrets through dreams is given an impossible task.",
      imdbRating: 8.8,

      favorite: true,
      myRating: 5,
      myOpinion:
        "Clever, layered, and endlessly rewatchable. The dream architecture is brilliant.",
    },

    {
      title: "The Dark Knight",
      meta: "2008 · Crime",
      type: "Movie",

      poster: "POSTER_URL",
      

      year: "2008",
      genre: "Action · Crime · Drama",
      details:
        "Batman faces a criminal mastermind who plunges Gotham into chaos.",
      imdbRating: 9.0,

      favorite: true,
      myRating: 5,
      myOpinion:
        "One of the rare superhero movies that works equally well as a crime thriller.",
    },

    {
      title: "Parasite",
      meta: "2019 · Thriller",
      type: "Movie",

      poster: "POSTER_URL",
      

      year: "2019",
      genre: "Thriller · Drama",
      details:
        "A struggling family gradually becomes entangled with a wealthy household.",
      imdbRating: 8.5,

      favorite: true,
      myRating: 4.5,
      myOpinion:
        "Brilliantly constructed. It keeps changing what kind of movie you think you're watching.",
    },

    {
      title: "Breaking Bad",
      meta: "2008 · Crime",
      type: "Series",

      poster: "POSTER_URL",
      

      year: "2008",
      genre: "Crime · Drama · Thriller",
      details:
        "A chemistry teacher turns to manufacturing methamphetamine after receiving a terminal diagnosis.",
      imdbRating: 9.5,

      favorite: true,
      myRating: 5,
      myOpinion:
        "One of the strongest character transformations ever written for television.",
    },

    {
      title: "Dark",
      meta: "2017 · Mystery",
      type: "Series",

      poster: "POSTER_URL",
      

      year: "2017",
      genre: "Mystery · Sci-Fi · Thriller",
      details:
        "A child's disappearance exposes a mystery involving four interconnected families.",
      imdbRating: 8.7,

      favorite: true,
      myRating: 5,
      myOpinion:
        "Dense and confusing at first, but incredibly satisfying once the pieces start connecting.",
    },

    {
      title: "Mr. Robot",
      meta: "2015 · Thriller",
      type: "Series",

      poster: "POSTER_URL",
      

      year: "2015",
      genre: "Drama · Thriller",
      details:
        "A cybersecurity engineer is drawn into a revolutionary hacktivist group's plan.",
      imdbRating: 8.5,

      favorite: true,
      myRating: 4.5,
      myOpinion:
        "Stylish, paranoid, and surprisingly deep. The visual direction is exceptional.",
    },

    {
      title: "Stranger Things",
      meta: "2016 · Sci-Fi",
      type: "Series",

      poster: "POSTER_URL",
      

      year: "2016",
      genre: "Sci-Fi · Horror · Mystery",
      details:
        "A group of friends uncover supernatural mysteries surrounding their small town.",
      imdbRating: 8.6,

      favorite: false,
      myRating: 4.5,
      myOpinion:
        "Great atmosphere and characters. The early seasons are especially strong.",
    },

    {
      title: "Moving",
      meta: "2023 · K-Drama",
      type: "Drama",

      poster: "POSTER_URL",
      

      year: "2023",
      genre: "Action · Fantasy · Romance",
      details:
        "Superpowered teenagers and their parents uncover dangerous secrets from their past.",
      imdbRating: 8.4,

      favorite: true,
      myRating: 5,
      myOpinion:
        "One of the most complete K-Dramas I've watched. Great characters, action, and emotional payoff.",
    },

    {
      title: "The Glory",
      meta: "2022 · K-Drama",
      type: "Drama",

      poster: "POSTER_URL",
      

      year: "2022",
      genre: "Revenge · Thriller · Drama",
      details:
        "A woman carefully plans revenge against the people who brutally bullied her during school.",
      imdbRating: 8.1,

      favorite: true,
      myRating: 4.5,
      myOpinion:
        "Dark, calculated, and extremely easy to binge. The revenge setup is executed well.",
    },

    {
      title: "Hidden Love",
      meta: "2023 · C-Drama",
      type: "Drama",

      poster: "POSTER_URL",
      

      year: "2023",
      genre: "Romance · Coming-of-Age",
      details:
        "A young woman develops feelings for her brother's close friend as she grows into adulthood.",
      imdbRating: 8.6,

      favorite: true,
      myRating: 4.5,
      myOpinion:
        "Very wholesome romance with great chemistry and an easygoing pace.",
    },

    {
      title: "Alice in Borderland",
      meta: "2020 · J-Drama",
      type: "Drama",

      poster: "POSTER_URL",
      

      year: "2020",
      genre: "Sci-Fi · Thriller · Survival",
      details:
        "A group of young people are forced to participate in deadly games in a mysterious parallel Tokyo.",
      imdbRating: 7.7,

      favorite: true,
      myRating: 4.5,
      myOpinion:
        "Fast-paced survival mystery with creative games and a strong atmosphere.",
    },

    {
      title: "Attack on Titan",
      meta: "2013 · Action",
      type: "Anime",

      poster: "POSTER_URL",
      

      year: "2013",
      genre: "Action · Drama · Fantasy",
      details:
        "Humanity fights for survival against enormous humanoid creatures known as Titans.",
      imdbRating: 9.1,

      favorite: true,
      myRating: 5,
      myOpinion:
        "Starts as survival action and gradually becomes a much deeper story about freedom, war, and humanity.",
    },

    {
      title: "Death Note",
      meta: "2006 · Psychological",
      type: "Anime",

      poster: "POSTER_URL",
      

      year: "2006",
      genre: "Mystery · Psychological · Thriller",
      details:
        "A student gains the supernatural ability to kill anyone whose name he writes in a mysterious notebook.",
      imdbRating: 8.9,

      favorite: true,
      myRating: 4.5,
      myOpinion:
        "The psychological battle between Light and L is still one of the most entertaining rivalries in anime.",
    },

    {
      title: "Vinland Saga",
      meta: "2019 · Historical",
      type: "Anime",

      poster: "POSTER_URL",
      

      year: "2019",
      genre: "Action · Historical · Drama",
      details:
        "A young Viking seeks revenge while becoming involved in a larger struggle for power.",
      imdbRating: 8.8,

      favorite: true,
      myRating: 5,
      myOpinion:
        "The way it evolves from a revenge story into a philosophy about violence is excellent.",
    },

    {
      title: "Your Name.",
      meta: "2016 · Romance",
      type: "Anime",

      poster: "POSTER_URL",
      

      year: "2016",
      genre: "Romance · Fantasy · Drama",
      details:
        "Two teenagers mysteriously begin switching bodies despite living completely separate lives.",
      imdbRating: 8.4,

      favorite: true,
      myRating: 4.5,
      myOpinion:
        "Gorgeous animation, incredible music, and a surprisingly emotional story.",
    },
  ] as MovieItem[],

  // nextUp: [
  //   {
  //     title: "Movie / Show One",
  //     meta: "2026 · Drama",
  //     type: "Drama",
  //   },
  //   {
  //     title: "Movie / Show Two",
  //     meta: "2025 · Sci-Fi",
  //     type: "Movie",
  //   },
  //   {
  //     title: "Movie / Show Three",
  //     meta: "2024 · Thriller",
  //     type: "Series",
  //   },
  //   {
  //     title: "Movie / Show Four",
  //     meta: "2023 · Animation",
  //     type: "Movie",
  //   },
  // ] as MovieItem[],
};