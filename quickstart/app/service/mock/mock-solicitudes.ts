import { Message } from "../../model/message.model"
import { Solicitude } from "../../model/solicitude.model"

export const SOLICITUDES: Solicitude[] = [
    {
        id:1, 
        description: "This is the test",
        amount: 2,
        typeOfCurrency: 1000,
        rate: 10,
        created: new Date().toISOString().substring(0, 10),
        updated: null,
        updatedby: 1,
        createdby: 1,
        history: [{
            id: 1,
            solicitudeId: 1,
            comment: "the comment 1",
            created: new Date(),
            updated: null,
            updatedby: 1,
            createdby: 1
        },
        {
            id: 2,
            solicitudeId: 1,
            comment: "the comment 2",
            created: new Date(),
            updated: null,
            updatedby: 1,
            createdby: 1
        }]
    },
    {
        id:2, 
        description: "This is the other test",
        amount: 2,
        typeOfCurrency: 2000,
        rate: 30,
        created: new Date().toISOString().substring(0, 10),
        updated: null,
        updatedby: 1,
        createdby: 1,
        history: [{
            id: 3,
            solicitudeId: 2,
            comment: "the comment 3",
            created: new Date(),
            updated: null,
            updatedby: 1,
            createdby: 1
        },
        {
            id: 4,
            solicitudeId: 2,
            comment: "the comment 4",
            created: new Date(),
            updated: null,
            updatedby: 1,
            createdby: 1
        }]
    }

]
