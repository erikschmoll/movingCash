import { Component, AfterViewInit } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass } from '@angular/common';
import { Solicitude } from "../../model/solicitude.model";
import { SolicitudeService } from "../../service/solicitude/solicitude.service";
import {handsontable} from '../../components/index';


declare var Handsontable: Function;
declare var $: any;


@Component({
    selector: 'solicitude',
    templateUrl: 'app/component/solicitude/solicitude-list.html',
    providers: [SolicitudeService],
    directives: [handsontable, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class SolicitudeComponent {
    public colHeaders: Array<string> = ['Description', 'Amount', 'Rate',
        'Created', 'Updated', 'Created By', 'Updated By'];
     columns: Array<any> = [
        {
            data: 'description',
            renderer: 'text',
            readOnly: true
        },
        {
            data: 'amount',
            type: 'numeric',
            format: '$ 0,0.00',
            readOnly: true
        },
        {
            data: 'rate',
            type: 'numeric',
            //format: '0.00 %'
        },
        {
            data: 'created',
            readOnly: false,
            type: 'date',
            dateFormat: 'DD/MM/YYYY',
            correctFormat: true,
            defaultDate: '01/01/1900'
        },
        {
            data: 'updated',
            renderer: 'text',
            readOnly: true
        },
        {
            data: 'createdby',
            renderer: 'text',
            readOnly: true
        },
        {
            data: 'updatedby',
            renderer: 'text',
            readOnly: true
        }
    ];
     colWidths: Array<number> = [30, 30, 30, 30, 30, 30, 30, 30];
     options: any = {
        stretchH: 'all',
        columnSorting: true,
        contextMenu: [
            'row_above', 'row_below', 'remove_row'
        ]
    };
    title: string;
    solicitudes: [any];
    solicitudesAll: Solicitude[];
    constructor(private service: SolicitudeService) {
        this.title = "Solicitudes"
        this.solicitudes = [{ name: "description" }]
        this.solicitudesAll = []
    }

    private afterChange(e: any) {
        //console.log(e);
    }

    private afterOnCellMouseDown(e: any) {
       // console.log(e);
    }

    ngAfterViewInit() {
        
    }

    getSolicitudes = () => {
        this.service.getSolicitudes().then(res => {
            var me = this;
            res.forEach(item => {
                me.solicitudesAll.push(item)
            });
        });
    }

    ngOnInit(): void {
        this.getSolicitudes();
    }
}
