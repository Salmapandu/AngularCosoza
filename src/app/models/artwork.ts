import { IArtist } from "./artist";

export interface Artwork {
    artwork_id: number;
    artworktitle: string;
    artworktype: string;
    typeofright: string;
    rightholdername: string;
    dob: string;
    workmode: string; 
    artist: IArtist | any;
}