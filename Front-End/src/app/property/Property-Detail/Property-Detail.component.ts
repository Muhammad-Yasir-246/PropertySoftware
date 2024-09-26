import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-Property-Detail',
  templateUrl: './Property-Detail.component.html',
  styleUrls: ['./Property-Detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
public PropertyId:number;
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {

    this.PropertyId =this.route.snapshot.params['id'];

  }
OnSelectNext(){
this.PropertyId +=1;
this.router.navigate(['property-Detail',this.PropertyId]);
}
}
