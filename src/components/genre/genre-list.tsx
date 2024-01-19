
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeGenre} from '../../store/actions.ts';
import {getCurrentGenre, getFilmList} from '../../store/reducer/selectors.ts';
import {Film, Genre} from '../../const.ts';

type GenreListItemProps = {
  genre: Genre;
  currentGenre: Genre;
}

const getGenres = (films: Film[]): Genre[] => [Genre.All, ...new Set(films.map((x) => x.genre))];

function GenreItem({genre, currentGenre}: GenreListItemProps): React.ReactElement {
  const dispatch = useAppDispatch();

  return (
    <li key={genre} className={`catalog__genres-item ${genre === currentGenre ? 'catalog__genres-item--active' : ''}`}>
      <button className="catalog__genres-link" data-testid="genre-item" onClick={() => {
        dispatch(changeGenre(genre));
      }} style={{background: 'transparent', border: 'none'}}
      >
        {genre}
      </button>
    </li>
  );
}

function GenreList(): JSX.Element {
  const currentGenre = useAppSelector(getCurrentGenre);
  const films = useAppSelector(getFilmList);
  const genres: Genre[] = getGenres(films);

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => <GenreItem key={genre} genre={genre} currentGenre={currentGenre}/>)}
    </ul>
  );
}


export default GenreList;
