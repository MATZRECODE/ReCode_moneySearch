import { Component, OnInit } from '@angular/core';
import {OurStuffService} from '../our-stuff.service';
// import {AtmMachineComponent} from '../atm-machine/atm-machine.component';

@Component({
  selector: 'app-atmbar',
  templateUrl: './atmbar.component.html',
  styleUrls: ['./atmbar.component.css'],
})
export class AtmbarComponent implements OnInit {

	machinePoints:any;
  constructor(
  	private atmPoints : OurStuffService,
  	) { }

  ngOnInit() {
      this.atmPoints.get().subscribe(data => {
      console.log(data);
       this.machinePoints  =  data
    });
  }

}
