export type PersonalCategory = {
  title: string;
  description: string;
  href: string;
};

export const personalCategories: PersonalCategory[] = [
  {
    title: "Music",
    description: "What I listen to.",
    href: "/personal/music",
  },
  {
    title: "Movies & TV",
    description: "What I watch.",
    href: "/personal/movies",
  },
  {
    title: "Games",
    description: "What I play.",
    href: "/personal/games",
  },
  {
    title: "Books",
    description: "What I read.",
    href: "/personal/books",
  },
];