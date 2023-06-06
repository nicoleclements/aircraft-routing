import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftRoutingComponent } from './aircraft-routing.component';

describe('AircraftRoutingComponent', () => {
  let component: AircraftRoutingComponent;
  let fixture: ComponentFixture<AircraftRoutingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AircraftRoutingComponent]
    });
    fixture = TestBed.createComponent(AircraftRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
