import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rent-page2',
  templateUrl: './rent-page2.component.html',
  styleUrls: ['./rent-page2.component.css']
})
export class RentPage2Component implements OnInit {
    public firstname: string;
    public lastname: string;
    public email: string;
    public phone: any;
    public accept: any;

  constructor(private router: Router) {
      this.firstname = '';
      this.lastname = '';
      this.email = '';
      this.phone = null;
      this.accept = false;
  }

  ngOnInit() {
      localStorage.getItem('firstname');
      localStorage.getItem('lastname');
      localStorage.getItem('email');
      localStorage.getItem('phone');
      localStorage.getItem('accept');
  }

  nextPage() {
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
