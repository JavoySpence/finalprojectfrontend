import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeedbackService } from 'src/app/services/feedback-service.service';

@Component({
  selector: 'app-view-feedbacks',
  templateUrl: './view-feedbacks-page.component.html',
  styleUrls: ['./view-feedbacks-page.component.css']
})
export class ViewFeedbacksComponent implements OnInit {
  id: number = 0;
  feedback: any = {};

  constructor(private route: ActivatedRoute, private feedbackService: FeedbackService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id > 0) {
      this.feedbackService.getSingleFeedbacks(this.id).subscribe(res => {
        if (res['status'] === 'success') {
          this.feedback = res['data']['feedback'];
          console.log(this.feedback)
        }
      });
    }
  }
}

