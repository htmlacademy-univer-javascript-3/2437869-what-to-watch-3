import {useState} from 'react';
import {Link} from 'react-router-dom';
import {VideoPlayer} from '../video-player/video-player.tsx';
import {Film} from '../../const.ts';

type FilmCardProps = {
  film: Film;
}

function FilmCard(props: FilmCardProps): JSX.Element {
  const [isHovered, setIsHover] = useState(false);
  return (
    <article onMouseEnter={() => {
      setIsHover(true);
    }} onMouseLeave={() => {
      setIsHover(false);
    }} className="small-film-card catalog__films-card"
    >
      <div className="small-film-card__image">
        <VideoPlayer videoSrc={props.film.previewVideoLink} imgSrc={props.film.previewImage} isHovered={isHovered} />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${props.film.id}`}>{props.film.name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
