import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsDropdownComponent } from './doctors-dropdown.component';

describe('DoctorsDropdownComponent', () => {
  let component: DoctorsDropdownComponent;
  let fixture: ComponentFixture<DoctorsDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorsDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorsDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
