import {Component, OnInit, Input, Output, ViewChild} from '@angular/core';
import { Router } from '@angular/router';

import {RentPageComponent} from '../rent-page/rent-page.component';
import {RentPage1Component} from '../rent-page1/rent-page1.component';
import {RentPage2Component} from '../rent-page2/rent-page2.component';

@Component({
  selector: 'app-rent-page-preview',
  templateUrl: './rent-page-preview.component.html',
})
export class RentPagePreviewComponent implements OnInit {
    @ViewChild(RentPageComponent)
    @ViewChild(RentPage1Component)
    @ViewChild(RentPage2Component)
/*
    @Input() street;
    @Input() number;
    @Input() city;
    @Input() floor;
    @Input() description;
    @Input() furniture;
    @Input() rooms;
    @Input() pets;
    @Input() firstname;
    @Input() lastname;
    @Input() email;
    @Input() phone;
    @Input() accept;
*/

    public street: string;
    public number: number;
    public city: string;
    public floor: string;
    public description: string;
    public furniture: string;
    public rooms: number;
    public pets: any;
    public firstname: string;
    public lastname: string;
    public email: string;
    public phone: any;
    public accept: any;

  constructor(private router: Router) {
  }

  ngOnInit() {
      this.street = localStorage.getItem('street');
      this.number = +localStorage.getItem('number');
      this.city = localStorage.getItem('city');
      this.floor = localStorage.getItem('floor');
      this.description = localStorage.getItem('description');
      this.furniture = localStorage.getItem('furniture');
      this.rooms = +localStorage.getItem('rooms');
      this.pets = localStorage.getItem('pets');
      this.firstname = localStorage.getItem('firstname');
      this.lastname = localStorage.getItem('lastname');
      this.email = localStorage.getItem('email');
      this.phone = localStorage.getItem('phone');
      this.accept = localStorage.getItem('accept');
      // For debugging
      console.log(this.street);
      console.log(this.number);
      console.log(this.city);
      console.log(this.floor);
      console.log(this.description);
      console.log(this.furniture);
      console.log(this.rooms);
      console.log(this.pets);
      console.log(this.firstname);
      console.log(this.lastname);
      console.log(this.email);
      console.log(this.phone);
      console.log(this.accept);
  }

    previousPage() {
        this.router.navigate(['/rentPage2']);
    }

}
