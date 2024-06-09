import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DoctorsService } from 'src/app/services/doctors.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-doctors',
  templateUrl: './edit-doctors.component.html',
  styleUrls: ['./edit-doctors.component.css']
})
export class EditDoctorsComponent implements OnInit, AfterViewInit {
  doctorData: any = {}; 
  @ViewChild('editDoctorForm') editDoctorForm?: NgForm;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private doctorsService: DoctorsService
  ) { }

  ngOnInit(): void {
    const doctorId = this.route.snapshot.params['id'];
    if (doctorId) {
      this.doctorsService.getSingleDoctor(doctorId).subscribe(
        (response: any) => {
          if (response.success) {
            this.doctorData = response.data;
            this.patchForm();
          } else {
            console.error('Doctor not found');
          }
        },
        (error: any) => {
          console.error('Error fetching doctor details:', error);
        }
      );
    }
  }

  ngAfterViewInit(): void {
    this.patchForm();
  }

  patchForm(): void {
    if (this.editDoctorForm && this.doctorData) {
      this.editDoctorForm.form.patchValue(this.doctorData);
    }
  }

  updateDoctor(form: NgForm): void {
    if (form.valid) {
      const doctorId = this.route.snapshot.params['id'];
      this.doctorsService.updateDoctor(doctorId, this.doctorData).subscribe(
        (response: any) => {
          if (response.success) {
            // Doctor updated successfully
            // Optionally, show a success message
            Swal.fire('Updated!', 'The doctor details have been updated.', 'success');
            // Navigate to the doctors page or any other route
            this.router.navigate(['/doctors']);
          } else {
        
            console.error('Error updating doctor');
         
            Swal.fire('Error!', 'Failed to update the doctor.', 'error');
          }
        },
        (error: any) => {
          console.error('Error updating doctor:', error);
        
          Swal.fire('Error!', 'Failed to update the doctor.', 'error');
        }
      );
    }
  }
}
