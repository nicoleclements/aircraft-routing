import { Component } from '@angular/core';
import { AircraftRouting } from '../aircraft-routing';
import data from '../../assets/aircraft-routes.json';

@Component({
  selector: 'aircraft-routing',
  templateUrl: './aircraft-routing.component.html',
  styleUrls: ['./aircraft-routing.component.css']
})
export class AircraftRoutingComponent {

  routing : AircraftRouting = data;

  constructor() { }

}
