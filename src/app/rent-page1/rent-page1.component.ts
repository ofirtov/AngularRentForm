import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RentDataService} from '../rent-data.service';

@Component({
    selector: 'app-rent-page1',
    templateUrl: './rent-page1.component.html',
    styleUrls: ['./rent-page1.component.css']
})
export class RentPage1Component implements OnInit {
    form2: any = [];
    public description: string;
    public furniture: string;
    public rooms: any;
    public pets: any;

    constructor(private router: Router, private rentServe: RentDataService) {
        this.description = '';
        this.furniture = '';
        this.rooms = null;
        this.pets = false;
        this.form2 = rentServe.getData();
    }

    ngOnInit() {
        this.description = this.form2.description;
        this.furniture = this.form2.furniture;
        this.rooms = this.form2.rooms;
        this.pets = this.form2.pets;
    }

    nextPage() {
        localStorage.setItem('description', this.form2.description);
        localStorage.setItem('furniture', this.form2.furniture);
        localStorage.setItem('rooms', this.form2.rooms);
        localStorage.setItem('pets', this.form2.pets);
        this.router.navigate(['/rentPage2']);
    }

    saveDetails() {
        localStorage.setItem('description', this.form2.description);
        localStorage.setItem('furniture', this.form2.furniture);
        localStorage.setItem('rooms', this.form2.rooms);
        localStorage.setItem('pets', this.form2.pets);
        console.log('description: ', this.form2.description);
        console.log('furniture: ', this.form2.furniture);
        console.log('rooms: ', this.form2.rooms);
        console.log('pets: ', this.form2.pets);
    }

    previousPage() {
        this.router.navigate(['/rentPage']);
    }

    pagePreview() {
        this.router.navigate(['/rentPagePreview']);
    }
}
