import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AircraftRoutingComponent } from './aircraft-routing/aircraft-routing.component';
import { AircraftRouteComponent } from './aircraft-route/aircraft-route.component';

@NgModule({
  declarations: [
    AppComponent,
    AircraftRoutingComponent,
    AircraftRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
