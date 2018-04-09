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
        localStorage.setItem('description', this.description);
        localStorage.setItem('furniture', this.furniture);
        localStorage.setItem('rooms', this.rooms);
        localStorage.setItem('pets', this.pets);
        this.router.navigate(['/rentPage2']);
    }

    saveDetails() {
        localStorage.setItem('description', this.description);
        localStorage.setItem('furniture', this.furniture);
        localStorage.setItem('rooms', this.rooms);
        localStorage.setItem('pets', this.pets);
        console.log('description: ', this.description);
        console.log('furniture: ', this.furniture);
        console.log('rooms: ', this.rooms);
        console.log('pets: ', this.pets);
    }

    previousPage() {
        this.router.navigate(['/rentPage']);
    }

    pagePreview() {
        this.router.navigate(['/rentPagePreview']);
    }
}
