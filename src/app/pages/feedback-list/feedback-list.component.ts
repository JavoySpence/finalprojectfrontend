import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/services/feedback-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit {
  feedbacks: any[] = [];
  p: number = 1;
  constructor(private feedbackService: FeedbackService) {}

  ngOnInit(): void {
    this.getAllFeedbacks();
  }

  getAllFeedbacks(): void {
    this.feedbackService.getFeedbacks().subscribe(
      (data: any) => {
        if (data && data.status === 'success' && Array.isArray(data.data.feedbacks)) {
          this.feedbacks = data.data.feedbacks;
        } else {
          console.error('Invalid data format:', data);
        }
      },
      (error) => { 
        console.error('Error fetching feedbacks:', error);
      }
    );
  }

  deleteFeedback(id: number): void {
    this.feedbackService.deleteFeedback(id).subscribe(
      (response: any) => {
        console.log('Feedback deleted:', response);
        this.getAllFeedbacks(); // Refresh the list after deletion
      },
      (error) => {
        console.error('Error deleting feedback:', error);
      }
    );
  }
}
