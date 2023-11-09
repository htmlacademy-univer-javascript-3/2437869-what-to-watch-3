import {FilmCardProps} from '../../components/FilmCard/filmCardProps.tsx';
import {AddReviewProps} from '../AddReview/addReview.tsx';
import {PlayerProps} from '../Player/player.tsx';


export type AppProps = {
    title: string;
    genre: string;
    releaseYear: number;
    films: FilmCardProps[];
    review: AddReviewProps;
    player: PlayerProps;
};
