import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FeedbackService } from 'src/app/services/feedback-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedbacks: any[] = [];
  totalFeedbackCount$: Observable<number> | null = null;
  feedback = {
    first_name: '',
    last_name: '',
    feedback: ''
  };

  constructor(private feedbackService: FeedbackService) {}

  ngOnInit(): void {
    // Optionally, you can initialize data here if needed
  }

  onSubmit(feedbackForm: NgForm): void {
    if (feedbackForm.valid) {
      const formData = feedbackForm.value;
      this.feedbackService.createFeedback(formData).subscribe(
        (response: any) => {
          console.log('Feedback created:', response);
        },
        (error) => {
          console.error('Error creating feedback:', error);
        }
      );
    }
  }
}
