import {FilmCardProps} from './filmCardProps.tsx';
import {useState} from 'react';
import {AppRoute} from '../App/const.ts';
import {Link} from 'react-router-dom';


const style = {
  width: '280',
  height: '175',
};

function FilmCard({id, src, title}: FilmCardProps): JSX.Element {
  const [, setIsHovered] = useState(false);
  return (
    <article onMouseEnter={() => {
      setIsHovered(true);
    }} onMouseLeave={() => {
      setIsHovered(false);
    }} className="small-film-card catalog__films-card"
    >
      <div className="small-film-card__image">
        <img src={src} alt={title} style={style}/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={AppRoute.Film(id)}>{title}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
