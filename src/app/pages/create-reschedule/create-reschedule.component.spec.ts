import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRescheduleComponent } from './create-reschedule.component';

describe('CreateRescheduleComponent', () => {
  let component: CreateRescheduleComponent;
  let fixture: ComponentFixture<CreateRescheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRescheduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRescheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
