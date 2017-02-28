import { Injectable } from "@angular/core"
import { Solicitude } from "../../model/solicitude.model"
import { SOLICITUDES } from "../mock/mock-solicitudes"

/************************COMUNICATION ON SERVER***************************/
// Importar objetos de la librería http
import { Http, Response, RequestOptions, Headers } from '@angular/http';  
// Importar la clase Observable desde la librería rxjs
import { Observable }     from 'rxjs/Observable';
/************************COMUNICATION ON SERVER***************************/

@Injectable()
export class SolicitudeService{
    constructor(private http: Http){}

    getSolicitudes = (): Observable<Response> => {
        return this.http.get('http://localhost:8080/solicitudes');
    }
}