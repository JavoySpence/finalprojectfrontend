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
  filteredAppointments: any[] = [];
  totalAppointmentsCount$: Observable<number> | null = null;
  p: number = 1;
  searchTerm: string = '';

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    this.getAllAppointments();
  }

  getAllAppointments(searchTerm: string = ''): void {
    this.appointmentService.allAppointments(searchTerm).subscribe(
      (data: any) => {
        if (data && data.status === 'success' && Array.isArray(data.data.appointments)) {
          this.appointments = data.data.appointments;
          this.filteredAppointments = this.filterAppointments(this.searchTerm);
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
        this.getAllAppointments(this.searchTerm);
      },
      (error) => {
        console.error('Error deleting appointment:', error);
      }
    );
  }

  onSearch(): void {
    const trimmedSearchTerm = this.searchTerm.trim();
    this.filteredAppointments = this.filterAppointments(trimmedSearchTerm);
  }

  private filterAppointments(searchTerm: string): any[] {
    if (!searchTerm) {
      return this.appointments;
    }
    return this.appointments.filter(appointment =>
      Object.values(appointment).some(val =>
        String(val).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }
}
