import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Iproperty } from '../IProperty.interface';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HousingService {

constructor(private http:HttpClient) { }
getAllProperties(): Observable<Iproperty[]>{
  return this.http.get('data/properties.json').pipe(map(data=>
  {
    const propertiesArray:Array<Iproperty>=[];
    for(const id in data){
      if(data.hasOwnProperty(id))
      {
        propertiesArray.push(data[id]);
      }
    }
  return propertiesArray;

}))
 
}
}

