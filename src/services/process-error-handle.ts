import {store} from '../store';
import {setError} from '../store/actions.ts';
import {clearError} from '../store/api-actions.ts';

export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearError());
};
