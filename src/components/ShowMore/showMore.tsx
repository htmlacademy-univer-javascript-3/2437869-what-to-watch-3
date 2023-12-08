import {useAppDispatch} from '../../hooks';
import {setCardsCount} from '../../store/actions.ts';

function ShowMore() {
  const dispatch = useAppDispatch();
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={(evt) => {
        evt.preventDefault();
        dispatch(setCardsCount());
      }}
      >Show more
      </button>
    </div>
  );
}

export default ShowMore;
