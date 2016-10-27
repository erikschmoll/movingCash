import { Message } from "./message.model"


export class Solicitude{
    id: number;
    description: string;
    amount: number;
    typeOfCurrency: number;
    rate: number;
    created: Date;
    updated: Date;
    updatedby: number;
    createdby: number;
    history: Message[];
    constructor(){}
}