import { IArtist } from "./artist";

export interface Artwork {
    artwork_id: number;
    type: string;
    title: string;
    artist: IArtist | any;
}
