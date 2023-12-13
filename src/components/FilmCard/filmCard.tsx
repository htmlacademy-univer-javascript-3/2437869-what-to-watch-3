import {FilmCardProps} from './filmCardProps.tsx';
import {useState} from 'react';
import {AppRoute} from '../App/const.ts';
import {Link} from 'react-router-dom';
import {VideoPlayer} from '../VideoPlayer/videoPlayer.tsx';

function FilmCard(props: FilmCardProps): JSX.Element {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <article onMouseEnter={() => {
      setIsHovered(true);
    }} onMouseLeave={() => {
      setIsHovered(false);
    }} className="small-film-card catalog__films-card"
    >
      <div className="small-film-card__image">
        <VideoPlayer videoSrc={props.previewVideoLink} imgSrc={props.previewImage} isHovered={isHovered} />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={AppRoute.Film}>{props.name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
