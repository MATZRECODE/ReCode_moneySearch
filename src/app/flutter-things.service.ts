import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";
// import {Observable} from "rxjs";
import 'rxjs/add/operator/map';


@Injectable()
export class FlutterThingsService {

	private apiBaseUrl: string = 'https://moneywave.herokuapp.com/banks';
	private apiInformation: string = "https://moneywave.herokuapp.com/v1/resolve/account";

	private headers :any;
 	
 	private options :any;

  constructor(
    private http: Http
  ) {
  	this.headers = new Headers({'Content-Type': 'application/json'});
  	this.headers.append('Authorization','sedxsawegtyrerw3srsdfzxzzvbhgehh213fdsz');
  	this.headers.append('Accept','application/json');

  	this.options = new RequestOptions({headers: this.headers});
  }

  public get(){
    return this.http.post(`${this.apiBaseUrl}`,'')
    			.map((res) => res.json());
  }

  public requestUserStuff(data){
  	return this.http.post(`${this.apiInformation}`,data,this.options)
  				.map((res)=>res.json());
  }

}
