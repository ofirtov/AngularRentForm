import { Component } from '@angular/core';
import {RentPageComponent} from './rent-page/rent-page.component';
import {RentPage1Component} from './rent-page1/rent-page1.component';
import {RentPage2Component} from './rent-page2/rent-page2.component';
import {RentPagePreviewComponent} from './rent-page-preview/rent-page-preview.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rent Form';
}
