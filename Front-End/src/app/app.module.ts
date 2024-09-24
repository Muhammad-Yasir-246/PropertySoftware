import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes,RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HousingService } from './Services/Housing.service';
import { AddPropertyComponent } from './property/Add-Property/Add-Property.component';
import { PropertyDetailComponent } from './property/Property-Detail/Property-Detail.component';

const appRoutes:Routes =[
{path:'',component:PropertyListComponent},
 {path:'Add-Property',component:AddPropertyComponent},
 {path:'Sell-Property',component:AddPropertyComponent},

 {path:'Detail-Property/:id',component:PropertyDetailComponent},
// {
//   path:'',component:AddPropertyComponent
// }
]

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    AddPropertyComponent,
    PropertyDetailComponent


    
   ],
  imports: [
    BrowserModule,
    HttpClientModule
    ,RouterModule.forRoot(appRoutes)
  ],
  providers: [
    HousingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
