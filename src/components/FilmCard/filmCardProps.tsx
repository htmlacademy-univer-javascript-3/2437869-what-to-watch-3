import {Genres} from '../../mocks/genresInfo.ts';

export type FilmCardProps = {
  id: number;
  title: string;
  genre: Genres;
  released: number;
  srcPoster: string;
  rating: number;
  description: string;
  director: string;
  starring: string[];
  bgImage: string;
  runTime: string;
  srcPreviewVideo: string;
}
