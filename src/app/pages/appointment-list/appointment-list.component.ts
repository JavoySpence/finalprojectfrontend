import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  appointments: any[] = [];
  totalAppointmentsCount$: Observable<number> | null = null;
  p: number = 1; 

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    this.getAllAppointments();
  
  }

  getAllAppointments(): void {
    this.appointmentService.allAppointments().subscribe(
      (data: any) => {
        if (data && data.status === 'success' && Array.isArray(data.data.appointments)) {
          this.appointments = data.data.appointments;
        } else {
          console.error('Invalid data format:', data);
        }
      },
      (error) => {
        console.error('Error fetching appointments:', error);
      }
    );
  }



  deleteAppointment(id: number): void {
    this.appointmentService.deleteAppointment(id).subscribe(
      (response: any) => {
        console.log('Appointment deleted:', response);
        this.getAllAppointments();
       
      },
      (error) => {
        console.error('Error deleting appointment:', error);
      }
    );
  }


  getAllDoctors(): void {
    this.appointmentService.allDoctors().subscribe(
      (data: any) => {
        if (data && data.status === 'success' && Array.isArray(data.data.appointments)) {
          this.appointments = data.data.appointments;
        } else {
          console.error('Invalid data format:', data);
        }
      },
      (error) => {
        console.error('Error fetching appointments:', error);
      }
    );
  }
}
