import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Add-Property',
  templateUrl: './Add-Property.component.html',
  styleUrls: ['./Add-Property.component.scss']
})
export class AddPropertyComponent implements OnInit {

  constructor( private route :Router) { }

  ngOnInit() {
  }
OnBack(){
  this.route.navigate(['/']);

}
}
