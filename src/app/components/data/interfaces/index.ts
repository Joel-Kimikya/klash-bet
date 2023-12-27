export type ITournament = {
  title: string;
  prizes: number;
  amount: number;
  status: string;
  members: number;
  sub_title: string;
  users: { name: string; amount: number; color: string }[];
  date: { day: number; hour: number; minute: number; seconds: number };
  properties: {
    bg_gradient: string;
    bg_color: string;
    color: string;
  };
};
