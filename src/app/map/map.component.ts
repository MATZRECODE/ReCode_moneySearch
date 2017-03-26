import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from 'angular2-google-maps/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
	public lat: number = 51.678418;
  	public lng: number = 7.809007;
  constructor(
  	// private mapsAPILoader: MapsAPILoader,
   //    // private ngZone: NgZone,
   //    private gmapsApi: GoogleMapsAPIWrapper,
  	) { }

  ngOnInit() {
  }

}
