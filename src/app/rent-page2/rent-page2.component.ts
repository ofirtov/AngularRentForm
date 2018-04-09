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
        localStorage.setItem('firstname', this.form3.firstname);
        localStorage.setItem('lastname', this.form3.lastname);
        localStorage.setItem('email', this.form3.email);
        localStorage.setItem('phone', this.form3.phone);
        localStorage.setItem('accept', this.form3.accept);
        this.router.navigate(['/rentPagePreview']);
    }

    saveDetails() {
        localStorage.setItem('firstname', this.form3.firstname);
        localStorage.setItem('lastname', this.form3.lastname);
        localStorage.setItem('email', this.form3.email);
        localStorage.setItem('phone', this.form3.phone);
        localStorage.setItem('accept', this.form3.accept);
        console.log('firstname: ', this.form3.firstname);
        console.log('lastname: ', this.form3.lastname);
        console.log('email: ', this.form3.email);
        console.log('phone: ', this.form3.phone);
        console.log('accept: ', this.form3.accept);
    }

    previousPage() {
        this.router.navigate(['/rentPage1']);
    }

    pagePreview() {
        this.router.navigate(['/rentPagePreview']);
    }

}
