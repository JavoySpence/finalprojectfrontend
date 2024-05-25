import { Component } from '@angular/core';
import { DoctorsService } from 'src/app/services/doctors.service';

@Component({
  selector: 'app-create-doctors',
  templateUrl: './create-doctors.component.html',
  styleUrls: ['./create-doctors.component.css']
})
export class CreateDoctorsComponent {
  firstName: string = '';
  lastName: string = '';
  speciality: string = '';
  
  constructor(private doctorsService: DoctorsService) {}

  onSubmit(): void {
    const doctorData = {
      first_name: this.firstName,
      last_name: this.lastName,
      speciality: this.speciality
    };

    this.doctorsService.createNewDoctor(doctorData).subscribe(
      (response: any) => {
        console.log('Doctor created successfully:', response);
        // Additional handling after creating a doctor
      },
      (error: any) => {
        console.error('Error creating doctor:', error);
      }
    );
  }
}
