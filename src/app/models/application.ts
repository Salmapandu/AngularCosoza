import { IArtist } from "./artist";
import { ILicense } from "./license";

export interface IApplication {
    application_id: number;
    application_date: string;
    application_type: string;
    artist?: IArtist | any;
    licensee?: ILicense | any;
}

