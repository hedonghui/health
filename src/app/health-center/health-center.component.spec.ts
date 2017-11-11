import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthCenterComponent } from './health-center.component';

describe('HealthCenterComponent', () => {
  let component: HealthCenterComponent;
  let fixture: ComponentFixture<HealthCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
