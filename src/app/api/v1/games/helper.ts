type IGame = {
  title: string;
  odds: number[];
  result: number;
  status: number;
}[];

export const Games: IGame = [
  {
    title: "Game 1",
    odds: [1, 2, 3],
    result: 1,
    status: 1,
  },
  {
    title: "Game 2",
    odds: [1, 2, 3],
    result: 1,
    status: 1,
  },
  {
    title: "Game 3",
    odds: [1, 2, 3],
    result: 1,
    status: 1,
  },
];
