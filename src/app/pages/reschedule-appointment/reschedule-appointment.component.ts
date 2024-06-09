import { Component, OnInit } from '@angular/core';
import { RescheduleServicesService } from 'src/app/services/reschedule-services.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-reschedule-appointment',
  templateUrl: './reschedule-appointment.component.html',
  styleUrls: ['./reschedule-appointment.component.css']
})
export class RescheduleAppointmentComponent implements OnInit {
  appointments: any[] = [];
  p: number = 1; // Current page number

  constructor(private rescheduleService: RescheduleServicesService) { }

  ngOnInit(){
    this.getAllRescheduledAppointments();
  }

  getAllRescheduledAppointments(): void {
    this.rescheduleService.getAllReschedules().subscribe(
      (data: any) => {
        if (data && data.status === 'success' && Array.isArray(data.data.appointments)) {
          this.appointments = data.data.appointments;
        } else {
          console.error('Invalid data format:', data);
        }
      },
      (error: HttpErrorResponse) => {
        console.error('Error fetching appointments:', error);
      }
    );
  }

  deleteSingleReschedule(id: number): void {
    this.rescheduleService.deleteReschedule(id).subscribe(
      (response: any) => {
        console.log('Appointment deleted:', response);
        this.getAllRescheduledAppointments();
      },
      (error) => {
        console.error('Error deleting appointment:', error);
      }
    );
  }
}
