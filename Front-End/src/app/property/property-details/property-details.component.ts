import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
public PropertyId:number;
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.PropertyId =+this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (params)=>{
        this.PropertyId = +params ['id'];
      }
    );
  }

  OnSelectNext()
  {
    this.PropertyId +=1;
    this.router.navigate(['Property-Details',this.PropertyId])

  }
}
