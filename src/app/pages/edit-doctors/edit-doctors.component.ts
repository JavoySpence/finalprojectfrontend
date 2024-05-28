import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DoctorsService } from 'src/app/services/doctors.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-doctors',
  templateUrl: './edit-doctors.component.html',
  styleUrls: ['./edit-doctors.component.css']
})
export class EditDoctorsComponent implements OnInit {
  doctorData: any = {}; // Use this to hold the doctor's data
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
            if (this.editDoctorForm) {
              this.editDoctorForm.form.patchValue(this.doctorData);
            }
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

  updateDoctor(form: NgForm): void {
    if (form.valid) {
      const doctorId = this.route.snapshot.params['id'];
      this.doctorsService.updateDoctor(doctorId, this.doctorData).subscribe(
        (response: any) => {
          if (response.success) {
            this.router.navigate(['/doctors']);
          } else {
            console.error('Error updating doctor');
          }
        },
        (error: any) => {
          console.error('Error updating doctor:', error);
        }
      );
    }
  }
}