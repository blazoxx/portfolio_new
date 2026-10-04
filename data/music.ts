export type MusicItem = {
  title: string;
  artist: string;
  album?: string;
  note?: string;
};

export const music = {
  current: {
    title: "YOUR CURRENT SONG",
    artist: "ARTIST",
    album: "ALBUM",
  },

  onRepeat: [] as MusicItem[],

  archive: [] as MusicItem[],
};