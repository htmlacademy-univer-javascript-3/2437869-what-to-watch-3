import {FilmCardProps} from '../../components/FilmCard/filmCardProps.tsx';
import {PlayerProps} from '../Player/player.tsx';
import {Review} from '../../components/Tabs/Reviews/reviewProps.ts';


export type AppProps = {
    title: string;
    genre: string;
    releaseYear: number;
    films: FilmCardProps[];
    review: Review[];
    player: PlayerProps;
};
