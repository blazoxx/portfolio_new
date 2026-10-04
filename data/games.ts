export type GameItem = {
  title: string;
  platform?: string;
  year?: string;
  note?: string;
};

export const games = {
  played: [] as GameItem[],

  nextUp: [] as GameItem[],
};