import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFeedbacksPageComponent } from './view-feedbacks-page.component';

describe('ViewFeedbacksPageComponent', () => {
  let component: ViewFeedbacksPageComponent;
  let fixture: ComponentFixture<ViewFeedbacksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFeedbacksPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewFeedbacksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
