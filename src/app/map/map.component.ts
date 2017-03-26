import { Component, NgModule, NgZone, OnInit, ViewChild, ElementRef, Directive, Input  } from '@angular/core';
import { AgmCoreModule, MapsAPILoader, GoogleMapsAPIWrapper } from 'angular2-google-maps/core';
import {OurStuffService} from '../our-stuff.service';
// import {MapsAPILoader, NoOpMapsAPILoader, MouseEvent,
//   ANGULAR2_GOOGLE_MAPS_PROVIDERS,
//   ANGULAR2_GOOGLE_MAPS_DIRECTIVES} from 'angular2-google-maps/core';
// import * as mapTypes from 'angular2-google-maps/services/google-maps-types';

interface marker {
     address: string,
    terminal: string,
    number: number,
    longitude: number,
    latitude: number,
    machines: Array<any>
  };

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers : [ GoogleMapsAPIWrapper ],
})
export class MapComponent implements OnInit {

  public machinePoints: any = [];
  public lat: number = 6.4294235;
  public lng: number = 3.4279153;
  // "logitude": "6.4294235",
  //   "latitude": "3.4279153",
  zoom:number = 19;
  constructor(
    private atmPoints : OurStuffService,
    private mapsAPILoader: MapsAPILoader,
      private ngZone: NgZone,
      private gmapsApi: GoogleMapsAPIWrapper,
      private _elementRef : ElementRef
  	) {

    this.ngZone.run(() => {
      this.atmPoints.get().subscribe(data => {
      console.log(data);
        this.machinePoints = data
    });
    })
    
  }

  ngOnInit() {
    // Retrieve posts from the API
  }

}
