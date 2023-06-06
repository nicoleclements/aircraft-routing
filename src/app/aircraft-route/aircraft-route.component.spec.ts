import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftRouteComponent } from './aircraft-route.component';

describe('AircraftRouteComponent', () => {
  let component: AircraftRouteComponent;
  let fixture: ComponentFixture<AircraftRouteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AircraftRouteComponent]
    });
    fixture = TestBed.createComponent(AircraftRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
