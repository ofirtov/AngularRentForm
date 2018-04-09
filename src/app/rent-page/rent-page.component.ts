import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { RentDataService} from '../rent-data.service';

@Component({
    selector: 'app-rent-page',
    templateUrl: './rent-page.component.html',
    styleUrls: ['./rent-page.component.css'],
})

export class RentPageComponent implements OnInit {
    form1: any = [];
    public street: string;
    public number: any;
    public city: string;
    public floor: any;
    public isSaved: boolean;

    constructor(private router: Router, private rentServe: RentDataService) {
        this.street = '';
        this.number = null;
        this.city = '';
        this.floor = null;
        this.isSaved = false;
        this.form1 = rentServe.getData();
    }

    ngOnInit() {
        this.street = this.form1.street;
        this.number = this.form1.number;
        this.city = this.form1.city;
        this.floor = this.form1.floor;
    }

    nextPage() {
        localStorage.setItem('street', this.street);
        localStorage.setItem('number', this.number);
        localStorage.setItem('city', this.city);
        localStorage.setItem('floor', this.floor);
        this.router.navigate(['/rentPage1']);
    }

    saveDetails() {
        localStorage.setItem('street', this.street);
        localStorage.setItem('number', this.number);
        localStorage.setItem('city', this.city);
        localStorage.setItem('floor', this.floor);
        // For debugging
        console.log('Street: ', this.street);
        console.log('number: ', this.number);
        console.log('city: ', this.city);
        console.log('floor: ', this.floor);
        this.isSaved = true;
    }

    pagePreview() {
        this.router.navigate(['/rentPagePreview']);
    }

    onSubmit() {
    }
}
