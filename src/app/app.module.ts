import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { RentDataService } from './rent-data.service';

import { AppComponent } from './app.component';
import { RentPageComponent } from './rent-page/rent-page.component';
import { RentPage1Component } from './rent-page1/rent-page1.component';
import { RentPage2Component } from './rent-page2/rent-page2.component';
import { RentPagePreviewComponent } from './rent-page-preview/rent-page-preview.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    RentPageComponent,
    RentPage1Component,
    RentPage2Component,
    RentPagePreviewComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [RentDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
