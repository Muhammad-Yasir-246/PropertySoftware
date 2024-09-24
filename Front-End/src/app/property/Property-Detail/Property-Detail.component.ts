import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-Property-Detail',
  templateUrl: './Property-Detail.component.html',
  styleUrls: ['./Property-Detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
public PropertyId:number;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.PropertyId=this.route.snapshot.params['id'];

  }

}
