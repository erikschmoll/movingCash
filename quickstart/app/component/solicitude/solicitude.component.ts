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
 data: Array<any> = [
        {
            id: 1,
            name: {
                first: "Erik",
                last: "Schmoll"
            },
            address: "Rivadavia 2040",
            product: {
                description: "product"
            },
            price: 40,
            isActive: true
        }
    ];
    public colHeaders: Array<string> = ['ID', 'First Name', 'Last Name', 'Address',
        'Favorite food', 'Price', 'Is active'];
     columns: Array<any> = [
        {
            data: 'id'
        },
        {
            data: 'name.first',
            renderer: 'text',
            readOnly: true
        },
        {
            data: 'name.last',
            readOnly: true
        },
        {
            data: 'address'
        },
        {
            data: 'product.description',
            source: 'product.options',
            optionField: 'description',
            type: 'autocomplete',
            strict: false,
            visibleRows: 4
        },
        {
            data: 'price',
            type: 'numeric',
            format: '$ 0,0.00'
        },
        {
            data: 'isActive',
            type: 'checkbox',
            checkedTemplate: true,
            uncheckedTemplate: false
        }
    ];
     colWidths: Array<number> = [null, null, null, null, null, null, 30];
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

    }

    private afterChange(e: any) {
        console.log(e);
    }

    private afterOnCellMouseDown(e: any) {
        console.log(e);
    }

    ngAfterViewInit() {
        
    }

    getSolicitudes = () => {
        this.service.getSolicitudes().then(res => {
            this.solicitudesAll = res;
        });
    }

    ngOnInit(): void {
        this.getSolicitudes();
    }
}
