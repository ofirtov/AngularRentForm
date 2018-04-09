import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RentPageComponent } from './rent-page/rent-page.component';
import { RentPage1Component } from './rent-page1/rent-page1.component';
import { RentPage2Component } from './rent-page2/rent-page2.component';
import { RentPagePreviewComponent } from './rent-page-preview/rent-page-preview.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/rentPage', pathMatch: 'full'},
    { path: 'rentPage', component: RentPageComponent},
    { path: 'rentPage1', component: RentPage1Component},
    { path: 'rentPage2', component: RentPage2Component},
    { path: 'rentPagePreview', component: RentPagePreviewComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
