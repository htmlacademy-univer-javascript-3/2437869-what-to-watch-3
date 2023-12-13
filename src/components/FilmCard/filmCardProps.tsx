import {Genres} from '../../mocks/genresInfo.ts';

export type FilmCardProps = {
  id: number;
  name: string;
  genre: Genres;
  released: number;
  previewImage: string;
  rating: number;
  description: string;
  director: string;
  starring: string[];
  backgroundImage: string;
  runTime: string;
  previewVideoLink: string;
}
