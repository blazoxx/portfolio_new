export type MovieType = "Movie" | "Series" | "Drama" | "Anime";

export type MovieItem = {
  title: string;
  meta: string;
  type: MovieType;

  poster?: string;

  year?: string;
  genre?: string;
  details?: string;

  imdbRating?: number; // IMDb rating,

  favorite?: boolean;

  myRating?: number; // your rating in stars
  myOpinion?: string;
};

export const movies = {
  watched: [
    {
      title: "Interstellar",
      meta: "2014 · Sci-Fi",
      type: "Movie",
      poster: "/movies/interstellar.jpg",
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
      poster: "/movies/inception.jpg",
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
      poster: "/movies/the-dark-knight.jpg",
      year: "2008",
      genre: "Action · Crime · Drama",
      details:
        "Batman faces a criminal mastermind who plunges Gotham into chaos.",
      imdbRating: 9.0,
      favorite: true,
      myRating: 5,
      myOpinion:
        "The Joker, the writing, and the atmosphere make this much more than a superhero movie.",
    },

    {
      title: "Parasite",
      meta: "2019 · Thriller",
      type: "Movie",
      poster: "/movies/parasite.jpg",
      year: "2019",
      genre: "Thriller · Drama",
      details:
        "A struggling family gradually becomes entangled with a wealthy household.",
      imdbRating: 8.5,
      favorite: true,
      myRating: 4.5,
      myOpinion:
        "Sharp social commentary wrapped inside an unpredictable and incredibly entertaining thriller.",
    },

    {
      title: "Whiplash",
      meta: "2014 · Drama",
      type: "Drama",
      poster: "/movies/whiplash.jpg",
      year: "2014",
      genre: "Drama · Music",
      details:
        "An ambitious young drummer clashes with an abusive and demanding instructor.",
      imdbRating: 8.5,
      favorite: true,
      myRating: 5,
      myOpinion:
        "Intense from beginning to end. The final performance is unforgettable.",
    },

    {
      title: "The Shawshank Redemption",
      meta: "1994 · Drama",
      type: "Drama",
      poster: "/movies/shawshank-redemption.jpg",
      year: "1994",
      genre: "Drama",
      details:
        "Two prisoners form a lasting friendship while enduring life inside Shawshank prison.",
      imdbRating: 9.3,
      favorite: false,
      myRating: 4.5,
      myOpinion:
        "A patient story about hope, friendship, and refusing to give up.",
    },

    {
      title: "Good Will Hunting",
      meta: "1997 · Drama",
      type: "Drama",
      poster: "/movies/good-will-hunting.jpg",
      year: "1997",
      genre: "Drama · Romance",
      details:
        "A troubled mathematical genius receives guidance from an unconventional therapist.",
      imdbRating: 8.3,
      favorite: false,
      myRating: 4.5,
      myOpinion:
        "Simple, emotional, and very human. The therapy scenes carry the movie.",
    },

    {
      title: "Breaking Bad",
      meta: "2008 · Crime",
      type: "Series",
      poster: "/movies/breaking-bad.jpg",
      year: "2008",
      genre: "Crime · Drama · Thriller",
      details:
        "A chemistry teacher turns to manufacturing methamphetamine after a terminal diagnosis.",
      imdbRating: 9.5,
      favorite: true,
      myRating: 5,
      myOpinion:
        "One of the best character transformations ever written for television.",
    },

    {
      title: "Dark",
      meta: "2017 · Mystery",
      type: "Series",
      poster: "/movies/dark.jpg",
      year: "2017",
      genre: "Mystery · Sci-Fi · Thriller",
      details:
        "The disappearance of a child exposes a complex mystery spanning multiple generations.",
      imdbRating: 8.7,
      favorite: true,
      myRating: 5,
      myOpinion:
        "Dense, confusing, and incredibly rewarding if you actually pay attention.",
    },

    {
      title: "Mr. Robot",
      meta: "2015 · Thriller",
      type: "Series",
      poster: "/movies/mr-robot.jpg",
      year: "2015",
      genre: "Drama · Thriller",
      details:
        "A cybersecurity engineer is drawn into a revolutionary hacktivist movement.",
      imdbRating: 8.5,
      favorite: true,
      myRating: 4.5,
      myOpinion:
        "The visual direction and psychological storytelling are exceptional.",
    },

    {
      title: "Attack on Titan",
      meta: "2013 · Action",
      type: "Anime",
      poster: "/movies/attack-on-titan.jpg",
      year: "2013",
      genre: "Action · Drama · Fantasy",
      details:
        "Humanity fights for survival against enormous humanoid creatures known as Titans.",
      imdbRating: 9.1,
      favorite: true,
      myRating: 5,
      myOpinion:
        "Starts as survival action and becomes an increasingly complex story about freedom and war.",
    },

    {
      title: "Vinland Saga",
      meta: "2019 · Historical",
      type: "Anime",
      poster: "/movies/vinland-saga.jpg",
      year: "2019",
      genre: "Action · Historical · Drama",
      details:
        "A young Viking seeks revenge while becoming entangled in a larger struggle for power.",
      imdbRating: 8.8,
      favorite: true,
      myRating: 5,
      myOpinion:
        "Its evolution from revenge story into a meditation on violence is excellent.",
    },

    {
      title: "Death Note",
      meta: "2006 · Psychological",
      type: "Anime",
      poster: "/movies/death-note.jpg",
      year: "2006",
      genre: "Mystery · Psychological · Thriller",
      details:
        "A student gains the power to kill anyone whose name he writes in a supernatural notebook.",
      imdbRating: 8.9,
      favorite: true,
      myRating: 4.5,
      myOpinion:
        "The psychological battle between Light and L is still ridiculously entertaining.",
    },

    {
      title: "Spirited Away",
      meta: "2001 · Fantasy",
      type: "Anime",
      poster: "/movies/spirited-away.jpg",
      year: "2001",
      genre: "Fantasy · Adventure",
      details:
        "A young girl enters a mysterious spirit world and must find a way to save her parents.",
      imdbRating: 8.6,
      favorite: false,
      myRating: 4.5,
      myOpinion:
        "Beautiful, strange, atmospheric, and packed with details worth revisiting.",
    },

    {
      title: "Your Name.",
      meta: "2016 · Romance",
      type: "Anime",
      poster: "/movies/your-name.jpg",
      year: "2016",
      genre: "Romance · Fantasy · Drama",
      details:
        "Two teenagers mysteriously begin switching bodies despite living completely separate lives.",
      imdbRating: 8.4,
      favorite: true,
      myRating: 4.5,
      myOpinion:
        "Beautiful animation, great music, and a surprisingly emotional story.",
    },

    {
      title: "A Silent Voice",
      meta: "2016 · Drama",
      type: "Anime",
      poster: "/movies/a-silent-voice.jpg",
      year: "2016",
      genre: "Drama · Romance",
      details:
        "A former bully attempts to reconnect with a deaf girl he mistreated during childhood.",
      imdbRating: 8.1,
      favorite: false,
      myRating: 4.5,
      myOpinion:
        "A quiet and painful story about guilt, isolation, forgiveness, and redemption.",
    },
  ] as MovieItem[],

  nextUp: [
    {
      title: "Movie / Show One",
      meta: "2026 · Drama",
      type: "Drama",
    },
    {
      title: "Movie / Show Two",
      meta: "2025 · Sci-Fi",
      type: "Movie",
    },
    {
      title: "Movie / Show Three",
      meta: "2024 · Thriller",
      type: "Series",
    },
    {
      title: "Movie / Show Four",
      meta: "2023 · Animation",
      type: "Movie",
    },
  ] as MovieItem[],
};