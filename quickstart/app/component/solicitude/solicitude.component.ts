import { Component, AfterViewInit } from '@angular/core';


declare var $:any;


@Component({
    selector: 'solicitude',
    templateUrl: 'app/component/solicitude/solicitude-list.html'
})
export class SolicitudeComponent{
    title :string;
    solicitudes :[any];
    constructor(){
        this.title = "Solicitudes"
        this.solicitudes = [{name: "doli B"}]
        
    }

    ngAfterViewInit() {
       $('#solicitude_dt').DataTable({
           data: this.solicitudes,
           columns: [
            { "data": "name", "title": "Pepe" }
        ]});
    }

}
