import {Component, OnInit, Input, Output, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { RentDataService } from '../rent-data.service';
import { Form } from '../form';

@Component({
    selector: 'app-rent-page-preview',
    templateUrl: './rent-page-preview.component.html',
})
export class RentPagePreviewComponent implements OnInit {
    rentForm: Form;
    myForm: any = [];

    constructor(private router: Router, private rentServ: RentDataService) {
        this.myForm = rentServ.putData();
    }

    ngOnInit() {
        console.log(this.myForm);
    }

    previousPage() {
        this.router.navigate(['/rentPage2']);
    }

}
