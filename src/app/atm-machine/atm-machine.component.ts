import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-atm-machine',
  templateUrl: './atm-machine.component.html',
  styleUrls: ['./atm-machine.component.css']
})

export class AtmMachineComponent implements OnInit {
	@Input() public terminal;

	@Input() public longitude

	@Input() public latitude;

	@Input() public machines: any;
  constructor() { }

  ngOnInit() {
  }

}
