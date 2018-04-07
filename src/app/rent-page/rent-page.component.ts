import {Component, EventEmitter, OnInit, Output, OnDestroy, Input} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
    selector: 'app-rent-page',
    templateUrl: './rent-page.component.html',
    styleUrls: ['./rent-page.component.css'],

})
export class RentPageComponent implements OnInit {
    // @Input() street;
    // @Output() street = new EventEmitter<string>();

    public street: string;
    public number: number;
    public city: string;
    public floor: number;
    public isSaved: boolean;

    constructor(private router: Router, private route: ActivatedRoute) {
        this.street = '';
        this.number = null;
        this.city = '';
        this.floor = null;
        this.isSaved = false;
    }

    ngOnInit() {
        localStorage.getItem('street');
        localStorage.getItem('number');
        localStorage.getItem('city');
        localStorage.getItem('floor');
        /*
              this.street = this.route.params.subscribe(params => {
                  this.street = params['street'];
                  // In a real app: dispatch action to load the details here.
              });

              this.number = this.route.params.subscribe(params => {
                  this.number = +params['street']; // (+) converts string 'id' to a number
              });


              this.floor = this.route.params.subscribe(params => {
                  this.floor = +params['floor']; // (+) converts string 'id' to a number
                  // In a real app: dispatch action to load the details here.
              });
        */
    }

    nextPage($event) {
        this.router.navigate(['/rentPage1']);
    }

    saveDetails($event) {

        localStorage.setItem('street', this.street),
        localStorage.setItem('number', this.number),
        localStorage.setItem('city', this.city),
        localStorage.setItem('floor', this.floor);
        /*
        $event.target.street = this.street;
        $event.target.number = this.number;
        $event.target.city = this.city;
        $event.target.floor = this.floor;
        */
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
    /*
        ngOnDestroy() {
            this.street.unsubscribe();
            this.number.unsubscribe();
            this.floor.unsubscribe();
        }
    */
}
