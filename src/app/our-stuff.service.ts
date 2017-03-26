import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
// import {Observable} from "rxjs";
import 'rxjs/add/operator/map';

@Injectable()
export class OurStuffService {

	private apiBaseUrl: String = './dummyapi/';

  constructor(
  	private http: Http
  	) { }

  public get(){
    return this.http.get(`${this.apiBaseUrl}locations.json`)
    			.map((res) => res.json());
  }

}
