import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RentDataService } from '../rent-data.service';

@Component({
    selector: 'app-rent-page2',
    templateUrl: './rent-page2.component.html',
    styleUrls: ['./rent-page2.component.css']
})
export class RentPage2Component implements OnInit {
    form3: any = [];
    public firstname: string;
    public lastname: string;
    public email: string;
    public phone: any;
    public accept: any;

    constructor(private router: Router, rentServe: RentDataService) {
        this.firstname = '';
        this.lastname = '';
        this.email = '';
        this.phone = null;
        this.accept = false;
        this.form3 = rentServe.getData();

    }

    ngOnInit() {
        this.firstname = this.form3.firstname;
        this.lastname = this.form3.lastname;
        this.email = this.form3.email;
        this.phone = this.form3.phone;
        this.accept = this.form3.accept;
    }

    nextPage() {
        localStorage.setItem('firstname', this.firstname);
        localStorage.setItem('lastname', this.lastname);
        localStorage.setItem('email', this.email);
        localStorage.setItem('phone', this.phone);
        localStorage.setItem('accept', this.accept);
        this.router.navigate(['/rentPagePreview']);
    }

    saveDetails() {
        localStorage.setItem('firstname', this.firstname);
        localStorage.setItem('lastname', this.lastname);
        localStorage.setItem('email', this.email);
        localStorage.setItem('phone', this.phone);
        localStorage.setItem('accept', this.accept);
        console.log('firstname: ', this.firstname);
        console.log('lastname: ', this.lastname);
        console.log('email: ', this.email);
        console.log('phone: ', this.phone);
        console.log('accept: ', this.accept);
    }

    previousPage() {
        this.router.navigate(['/rentPage1']);
    }

    pagePreview() {
        this.router.navigate(['/rentPagePreview']);
    }

}
