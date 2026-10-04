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

  onRepeat: [
    // Add songs here later
    // {
    //   title: "Song",
    //   artist: "Artist",
    //   album: "Album",
    // },
  ] as MusicItem[],

  archive: [
    // Add older favorites here later
  ] as MusicItem[],
};