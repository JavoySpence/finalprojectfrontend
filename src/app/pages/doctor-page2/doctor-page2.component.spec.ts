import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorPage2Component } from './doctor-page2.component';

describe('DoctorPage2Component', () => {
  let component: DoctorPage2Component;
  let fixture: ComponentFixture<DoctorPage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorPage2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
