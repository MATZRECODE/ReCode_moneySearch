import { Component, OnInit } from '@angular/core';
import { FlutterThingsService } from '../flutter-things.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

	public bankCodes: any = [];
  public selectedValue = null;

  constructor( private flutter:FlutterThingsService) { }
  ngOnInit() {
    // Retrieve posts from the API
    this.flutter.get().subscribe(data => {
      console.log(data.data);
      if(data.status == 'success'){
      	this.bankCodes = data.data
      }
    });
  }
  public submit(){
  	// sending the request for the various input details
  }

}
