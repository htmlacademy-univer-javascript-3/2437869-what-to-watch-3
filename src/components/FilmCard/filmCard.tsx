import {FilmCardProps} from './filmCardProps.tsx';


const style = {
  width: '280',
  height: '175',
};

function FilmCard({imagePath, title}: FilmCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={imagePath} alt={title} style={style}/>
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{title}</a>
      </h3>
    </article>
  );
}

export default FilmCard;
