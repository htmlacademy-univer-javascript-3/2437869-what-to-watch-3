import {GenreProps} from './genreProps.tsx';
function Genre({name} : GenreProps) {
  return (
    <li className="catalog__genres-item catalog__genres-item--active">
      <a href="#" className="catalog__genres-link">{name}</a>
    </li>
  );
}

export default Genre;
