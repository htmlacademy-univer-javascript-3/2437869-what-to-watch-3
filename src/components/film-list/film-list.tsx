import FilmCard from '../film-card/film-card.tsx';
import {Film} from '../../const.ts';

export type FilmCardListProps = {
  films: Film[];
}

function FilmList({ films }: FilmCardListProps) {
  return (
    <div className="catalog__films-list">
      {films.map((film) =>
        <FilmCard {...film} key={film.id} film={film}/>)}
    </div>
  );
}

export default FilmList;
