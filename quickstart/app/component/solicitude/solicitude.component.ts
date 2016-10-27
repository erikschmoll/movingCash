import { Component, AfterViewInit } from '@angular/core';
import { Solicitude } from "../../model/solicitude.model";
import { SolicitudeService } from "../../service/solicitude/solicitude.service";



declare var $:any;


@Component({
    selector: 'solicitude',
    templateUrl: 'app/component/solicitude/solicitude-list.html',
    providers: [SolicitudeService]
})
export class SolicitudeComponent{
    title :string;
    solicitudes :[any];
    solicitudesAll :Solicitude[];
    constructor(private service: SolicitudeService){
        this.title = "Solicitudes"
        this.solicitudes = [{name: "description"}]
        
    }

    ngAfterViewInit() {
       $('#solicitude_dt').DataTable({
           ajax: this.solicitudesAll,
           columns: [
            { "data": "description", "title": "Description" }
        ]});
    }
    
    getSolicitudes = () =>{
        this.service.getSolicitudes().then(res =>{
            this.solicitudesAll = res;
            $('#solicitude_dt').dataTable()._fnAjaxUpdate();
        });
    }

    ngOnInit(): void {
        this.getSolicitudes();
    }
}
