import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  Properties: Array<any> = [
    {
    "Id":1,
    "Name":"Birla House",
    "Type":"House",
    "Price":1200
},
{
  "Id":2,
  "Name":"John House",
  "Type":"House",
  "Price":1500
},
{
  "Id":3,
  "Name":"kyle House",
  "Type":"House",
  "Price":1200
},
{
  "Id":4,
  "Name":"casito House",
  "Type":"House",
  "Price":1200
},
]
  constructor() { }

  ngOnInit(): void {
  }

}
