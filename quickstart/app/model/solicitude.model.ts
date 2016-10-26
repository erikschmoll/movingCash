import { message } from "./message.model"


export class solicitude{
    id: number;
    description: string;
    amount: number;
    typeOfCurrency: number;
    rate: number;
    created: Date;
    updated: Date;
    updatedby: number;
    createdby: number;
    history: message[];
    constructor(){}
}