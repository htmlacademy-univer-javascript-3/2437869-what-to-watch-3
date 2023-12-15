import {Genres} from '../../mocks/genresInfo.ts';

export type FilmCardProps = {
  id: string;
  name: string;
  genre: Genres;
  released: number;
  previewImage: string;
  posterImage: string;
  backgroundImage: string;
  scoresCount: number;
  rating: number;
  description: string;
  director: string;
  starring: string[];
  runTime: string;
}
