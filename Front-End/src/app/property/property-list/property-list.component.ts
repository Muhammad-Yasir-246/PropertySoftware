import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/Services/housing.service';
import { Iproperty } from '../Iproperties.interface';
import { error } from '@angular/compiler/src/util';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  SellRent=1;
  properties: Iproperty[];
  constructor(private route:ActivatedRoute, private housingService:HousingService) { }
  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){

      this.SellRent=2;
    }
    this.housingService.getAllproperties(this.SellRent).subscribe(
    
      data=>{

        this.properties=data;
        console.log(data);
        console.log(this.route.snapshot.url.toString());
             
      },
      error=>{
        console.log('httperror:');
        console.log(error)
      }
    );
  }
  }


