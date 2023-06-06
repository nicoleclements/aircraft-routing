import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { AircraftRoute } from '../aircraft-routing';
// import { AircraftRouting } from '../aircraft-routing';
// import data from '../../assets/aircraft-routes.json';

type ClassName = 'routeActive' | 'routeDeparted' | 'routeScheduled';

@Component({
  selector: 'aircraft-route',
  templateUrl: './aircraft-route.component.html',
  styleUrls: ['./aircraft-route.component.css']
})

export class AircraftRouteComponent implements OnInit {
 
  className: ClassName = "routeDeparted";

  constructor() {}

  @Input() route!: AircraftRoute;
  
  getMonth(date: string): string {
   
    let x = new Date(date);
    let months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
    let name = months[x.getMonth()];
    return name;

  }



  getOpStatusClass(status: string): ClassName {
    if (status == "Departed") {
      return "routeDeparted";
    } else if (status == "Active") {
      return "routeActive";
    } else if (status === "Scheduled") {
      return "routeScheduled";
    } else {
      return "routeDeparted";
    }
  }

    // ngOnChanges(changes: SimpleChanges) {
  //  if (changes) {
  //   //className = this.getOpStatusClass(changes.route.ops_status);
  //   console.log(JSON.stringify(changes));
  //  }
   
  // }

  ngOnInit(): void {}

}
