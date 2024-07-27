import { IArtist } from "./artist";

export interface Artwork {
    artwork_id: number;
    artworktype: string;
    artworktitle: string;
    artist: IArtist | any;
}