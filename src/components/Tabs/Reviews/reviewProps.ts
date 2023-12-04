export type Review = {
  id: number;
  text: string;
  author: string;
  date: string;
  rating: number;
  filmId?: number;
}
