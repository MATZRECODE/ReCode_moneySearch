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
  public account_number = null;
  public account_name = null;

  public 

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
  submitDetails() {
     let model = {
       'account_number':this.selectedValue,
       'bank_code':this.account_number
     }
     this.flutter.requestUserStuff(model).subscribe(data =>{
       if(data.status == 'success'){
         this.account_name = data.account_name
       }
     })
  }

}
