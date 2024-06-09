import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {
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

 ngOnInit(): void {
   this.getAllDoctors();
 }

  addAppointment2(myForm: NgForm): void {
  const addApp = this.appointmentService.newAppointments(myForm.value).subscribe({
    next: (res) => {
      console.log('Appointment added successfully:', res);
      Swal.fire('Appointment added successfully!');
      this.router.navigate(['/appointments']);
    },
    error: (error) => {
      console.error('Error adding appointment:', error);
      alert('Error adding appointment. Please try again later.');
    }
  });
}



  getAllDoctors(): void {
    this.appointmentService.allDoctors().subscribe(
      (res: any) => {
        if (res.status === 'success'){
          this.doctors = res.data! ['doctors']
          console.log(`Fetched doctor names: ${JSON.stringify(this.doctors)}`); 
        } else {
          // console.error('Invalid data format:', data);
        }
      },
      (error) => {
        console.error('Error fetching doctors:', error);  
      }
    );
  }
  

}