import Logo from '../../components/logo/logo.tsx';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../components/App/const.ts';
import AddReviewForm from '../../components/AddReviewForm/addReviewForm.tsx';

export type AddReviewProps = {
  id: number;
  name: string;
  imgSrc: string;
  bgSrc: string;
}

function AddReview({ id, name, imgSrc, bgSrc } : AddReviewProps) : JSX.Element {
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={bgSrc} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={AppRoute.Film(id)} className="breadcrumbs__link">{name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={imgSrc} alt={name} width="218" height="327" />
        </div>
      </div>

      <AddReviewForm />

    </section>
  );
}

export default AddReview;
