
import { Component, OnInit, } from '@angular/core';
import { Iproperty } from 'src/app/IProperty.interface';
import { HousingService } from 'src/app/Services/Housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  Property: Array<Iproperty> ;
  constructor(private housingService:HousingService) { }

  ngOnInit(): void {
    this.housingService.getAllProperties().subscribe(
      data=>{
      this.Property=data
      console.log(data)
      }
    )
   
  }

}
