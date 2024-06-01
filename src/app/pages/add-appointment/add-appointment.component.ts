import { Component } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent {
  first_name: string = '';
  last_name: string = '';
  sex: string = '';
  DOB: Date = new Date();
  appointment_date: Date = new Date();
  title: string = '';
  reason_for_visit: string = '';
  doctor_name: string = '';
  phone: string = '';
  medical_history: string = '';
  medications_taken: string = '';
  email: string = '';

  genders: string[] = ['Male', 'Female'];
  titleOptions: string[] = ['Mr', 'Mrs', 'Miss']; 

  appointments: any[] = []; 
  doctors: any[] = []

  selectedDoctorName: string = ''; 

  constructor(private appointmentService: AppointmentService, private router: Router) { }

  addAppointment2(myForm: NgForm){
    const addApp = this.appointmentService.newAppointments(myForm.value).subscribe({
      next: (res) => {
        console.log('Appointment added successfully:', res);
        this.router.navigate(['/appointments']);
      },
      error: (error) => {
        console.error('Error adding appointment:', error);
      }
    });
  }


  getAllDoctors(): void {
    this.appointmentService.allDoctors().subscribe(
      (data: any) => {
        if (data && data.status === 'success' && Array.isArray(data.data.doctors)) {
          this.doctors = data.data.doctors.map((doctors: any) => doctors.name);
          console.log('Fetched doctor names:', this.doctors); 
        } else {
          console.error('Invalid data format:', data);
        }
      },
      (error) => {
        console.error('Error fetching doctors:', error);
      }
    );
  }
  

}
