import { IArtist } from "./artist";
import { ILicense } from "./license";

export interface IApplication {
    application_id: number;
    date: string;
    type: string;
    artist?: IArtist | any;
    licensee?: ILicense | any;
}
