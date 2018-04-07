import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rent-page1',
  templateUrl: './rent-page1.component.html',
  styleUrls: ['./rent-page1.component.css']
})
export class RentPage1Component implements OnInit {
    public description: any;
    public furniture: any;
    public rooms: any;
    public pets: boolean;

  constructor(private router: Router) {
      this.description = '';
      this.furniture = '';
      this.rooms = null;
      this.pets = false;
  }

  ngOnInit() {
  }

    nextPage() {
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
