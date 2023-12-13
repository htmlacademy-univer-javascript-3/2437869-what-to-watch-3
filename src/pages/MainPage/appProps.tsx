import {PlayerProps} from '../Player/player.tsx';
import {Review} from '../../components/Tabs/Reviews/reviewProps.ts';


export type AppProps = {
    title: string;
    genre: string;
    releaseYear: number;
    review: Review[];
    player: PlayerProps;
};
