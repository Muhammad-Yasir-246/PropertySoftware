import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  constructor() { }
  property = {
    name: '',
    type: '',
    price: ''
  };
  ngOnInit(): void {
  }
  Onsubmit(Form:NgForm){ 
  console.log("Congratulation Successfull Form Run ")
  console.log(Form.value);
}
}
