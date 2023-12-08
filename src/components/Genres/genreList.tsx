import {Genres} from '../../mocks/genresInfo.ts';
import {films} from '../../mocks/films.ts';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeGenre, getGenreFilms} from '../../store/actions.ts';

function GenreList() {
  const genres: Genres[] = [Genres.All, ...new Set(films.map((x) => x.genre))];
  const dispatch = useAppDispatch();
  const currentGenre = useAppSelector((state) => state.genre);
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li className={`catalog__genres-item ${genre === currentGenre ? 'catalog__genres-item--active' : ''}`}
          key={genre}
        >
          <button
            className="catalog__genres-link"
            onClick={() => {
              dispatch(changeGenre(genre));
              dispatch(getGenreFilms());
            }}
            style={{background: 'transparent', border: 'none'}}
          >
            {genre}
          </button>
        </li>))}
    </ul>

  );
}

export default GenreList;
