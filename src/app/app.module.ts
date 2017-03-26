import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import { AgmCoreModule } from "angular2-google-maps/core";

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { MapComponent } from './map/map.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

// the services go here
import { FlutterThingsService} from './flutter-things.service';
import { OurStuffService } from './our-stuff.service';
import { ConverterPipe } from './converter.pipe';
import { StylemapDirective } from './stylemap.directive';
import { LocationsetPipe } from './locationset.pipe';
import { GoogleMapsDirective } from './google-maps.directive';
import { AtmbarComponent } from './atmbar/atmbar.component';
import { AtmMachineComponent } from './atm-machine/atm-machine.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    MapComponent,
    FooterComponent,
    SidebarComponent,
    ConverterPipe,
    StylemapDirective,
    LocationsetPipe,
    GoogleMapsDirective,
    AtmbarComponent,
    AtmMachineComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyD3cvskt71sqoT2kXrUTJvhi2If5nS7r-s",
      // libraries: ["places"]
    }),
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
            {
              path: '',
              component:  DashboardComponent,
              //canActivate:[AuthGuard]
            }
    ])
  ],
  providers: [
    FlutterThingsService,
    OurStuffService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
