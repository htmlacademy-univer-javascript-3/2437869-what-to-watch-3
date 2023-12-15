import {PlayerProps} from '../Player/player.tsx';
import {Review} from '../../const.ts';


export type AppProps = {
    title: string;
    genre: string;
    releaseYear: number;
    review: Review[];
    player: PlayerProps;
};
