import {Navigate} from 'react-router-dom';
import {useAppSelector} from '../../hooks';
import {getAuthStatus} from '../../store/user-reducer/user-selector.ts';
import {AppRoute, AuthorizationStatus} from '../../const.ts';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthStatus);

  return (
    authorizationStatus === AuthorizationStatus.Auth ? props.children : <Navigate to={AppRoute.SignIn}/>
  );
}

export default PrivateRoute;
