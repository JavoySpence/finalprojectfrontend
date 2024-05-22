import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.css']
})
export class ViewPageComponent implements OnInit {
  id: number = 0;
  appointment: any = {};

  constructor(private route: ActivatedRoute, private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id > 0) {
      this.appointmentService.singleAppointment(this.id).subscribe(res => {
        if (res['status'] === 'success') {
          this.appointment = res['data']['appointment'];
        }
      });
    }
  }
}

