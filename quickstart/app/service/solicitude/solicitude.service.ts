import { Injectable } from "@angular/core"
import { Solicitude } from "../../model/solicitude.model"
import { SOLICITUDES } from "../mock/mock-solicitudes"

@Injectable()
export class SolicitudeService{
    constructor(){}
    getSolicitudes = ():Promise<Solicitude[]> => {
        return Promise.resolve(SOLICITUDES);
    }
}