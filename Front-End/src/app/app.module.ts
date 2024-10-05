import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HousingService } from './Services/housing.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';

import { PropertyDetailsComponent } from './property/property-details/property-details.component';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { UserLoginComponent } from './Users/User-LogIn/user-login/user-login.component';
import { UserRegisterComponent } from './Users/User-Register/user-register/user-register.component';
import { UserService } from './Services/user.service';


const appRoutes:Routes =[

  { path:'Add-property',component:AddPropertyComponent},
  
  { path:'', component:PropertyListComponent},
  { path:'Buy', component:PropertyListComponent},
 { path:'Add-Rent',component:PropertyListComponent},
  { path:'Property-Details',component:PropertyDetailsComponent},
  { path:'Property-Details/:id',component:PropertyDetailsComponent},
  { path:'User-Login',component:UserLoginComponent},
  { path:'User-Register',component:UserRegisterComponent},

  






 
]
@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    AddPropertyComponent,
    PropertyDetailsComponent,
   UserLoginComponent,
   UserRegisterComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [HousingService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
