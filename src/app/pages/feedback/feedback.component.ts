import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FeedbackService } from 'src/app/services/feedback-service.service';
import Swal from 'sweetalert2';
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
          Swal.fire({
            title: 'Success!',
            text: 'Feedback created successfully.',
            icon: 'success',
            confirmButtonText: 'OK'
          });
        },
        (error) => {
          Swal.fire({
            title: 'Error!',
            text: 'Error creating feedback. Please try again.',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }
      );
    }
  }
}
