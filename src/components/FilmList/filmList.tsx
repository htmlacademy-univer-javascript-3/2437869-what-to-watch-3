import FilmCard from '../FilmCard/filmCard.tsx';
import {FilmCardProps} from '../FilmCard/filmCardProps.tsx';

export type FilmCardListProps = {
  films: FilmCardProps[];
}

function FilmList({ films }: FilmCardListProps) {
  return (
    <div className="catalog__films-list">
      {films.map((film) =>
        <FilmCard {...film} key={film.id}/>)}
    </div>
  );
}

export default FilmList;
