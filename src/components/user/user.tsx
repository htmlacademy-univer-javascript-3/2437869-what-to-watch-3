import React from 'react';
import { Link } from 'react-router-dom';
import { AxiosError } from 'axios';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getAuthStatus, getAvatar} from '../../store/user-reducer/user-selector.ts';
import {logOut} from '../../store/api-actions.ts';
import {processErrorHandle} from '../../services/process-error-handle.ts';
import {AppRoute, AuthorizationStatus} from '../../const.ts';


function User(): JSX.Element {
  const dispatch = useAppDispatch();
  const avatar = useAppSelector(getAvatar);
  const authStatus = useAppSelector(getAuthStatus);

  const handleSignOutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    dispatch(logOut())
      .catch((err: AxiosError) => processErrorHandle(`Something went wrong. ${err.message}`));
  };

  if (authStatus !== AuthorizationStatus.Auth) {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <Link to={AppRoute.SignIn} className='user-block__link'>Sign in</Link>
        </li>
      </ul>
    );
  }

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar" role='user-block-avatar'>
          <Link to={AppRoute.MyList}>
            <img src={avatar || ''} alt="User avatar" />
          </Link>
        </div>
      </li>
      <li className="user-block__item">
        <a className="user-block__link" onClick={handleSignOutClick}>Sign out</a>
      </li>
    </ul>
  );
}

export default User;
