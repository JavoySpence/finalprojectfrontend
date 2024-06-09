import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FeedbackService } from 'src/app/services/feedback-service.service';

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
       
        this.getAllFeedbacks();
       
        Swal.fire('Deleted!', 'The feedback has been deleted.', 'success');
      },
      (error) => {
        console.error('Error deleting feedback:', error);
      
        Swal.fire('Error!', 'Failed to delete the feedback.', 'error');
      }
    );
  }
}


