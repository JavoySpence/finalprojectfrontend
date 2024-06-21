import { Component, OnInit, HostListener } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  appointments: any[] = [];
  originalAppointments: any[] = []; 
  filteredAppointments: any[] = [];
  totalAppointmentsCount$: Observable<number> | null = null;
  p: number = 1;
  searchTerm: string = '';

  constructor(private appointmentService: AppointmentService, private router: Router) {}

  ngOnInit(): void {
    this.getAllAppointments();
  }

  getAllAppointments(): void {
    this.appointmentService.allAppointments().subscribe(
      (data: any) => {
        if (data && data.status === 'success' && Array.isArray(data.data.appointments)) {
          this.appointments = data.data.appointments;
          // Store the original list
          this.originalAppointments = data.data.appointments;
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
        this.getAllAppointments(); 
        Swal.fire(
          'DELETED'
        );
      },
      (error) => {
        console.error('Error deleting appointment:', error);
      }
    );
  }

  onSearch(): void {
    this.filteredAppointments = this.filterAppointments(this.searchTerm);
  }

  private filterAppointments(searchTerm: string): any[] {
    if (!searchTerm.trim()) {
      return this.appointments;
    }
    // Convert search term to date
    const searchDate = new Date(searchTerm);
   
    return this.appointments.filter(appointment =>
      new Date(appointment.appointment_date).toDateString() === searchDate.toDateString()
    );
  }

  
  @HostListener('window:popstate', ['$event'])
  onPopState(event: any) {
    
    this.router.navigate(['/appointments']);
  }
}
