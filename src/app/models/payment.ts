import { IApplication } from "./application";

export interface IPayment {
    payment_id: number;
    amount_paid: string;
    date_paid: string;
    application?: IApplication;
}
