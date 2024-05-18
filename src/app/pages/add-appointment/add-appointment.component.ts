import { Component } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';

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

  constructor(private appointmentService: AppointmentService, private router: Router) { }

  // addAppointment(): void {
  //   const newAppointment = {
  //     first_name: this.first_name,
  //     last_name: this.last_name,
  //     sex: this.sex,
  //     DOB: this.DOB,
  //     appointment_date: this.appointment_date,
  //     title: this.title,
  //     reason_for_visit: this.reason_for_visit,
  //     doctor_name: this.doctor_name,
  //     phone: this.phone,
  //     medical_history: this.medical_history,
  //     medications_taken: this.medications_taken
  //   };
    
  //   this.appointmentService.newAppointments(newAppointment).subscribe(
  //     (response: any) => {
  //       console.log('Appointment added successfully:', response);
  //       this.router.navigate(['/appointments']);
  //     },
  //     (error) => {
  //       console.error('Error adding appointment:', error);
  //     }
  //   );
  // }

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
}

