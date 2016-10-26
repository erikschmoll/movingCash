import { message } from "../../model/message.model"
import { solicitude } from "../../model/solicitude.model"

export const solicitudes: solicitude[] = [
    {id:1, 
    description: "This is the test",
    amount: 2,
    typeOfCurrency: 1000,
    rate: 10,
    created: new Date(),
    updated: new Date(),
    updatedby: 1,
    createdby: 1,
    history: [{
        id: 1,
        comment: "the comment",
        created: new Date(),
        updated: new Date(),
        updatedby: 1,
        createdby: 1
    }]
}

]
