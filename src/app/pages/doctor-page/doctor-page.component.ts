import { Component, OnInit } from '@angular/core';
import { DoctorsService } from 'src/app/services/doctors.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-doctor-page',
  templateUrl: './doctor-page.component.html',
  styleUrls: ['./doctor-page.component.css']
})
export class DoctorPageComponent implements OnInit {
  doctors: any[] = [];
  p: number = 1;

  constructor(private doctorService: DoctorsService) {}

  ngOnInit(): void {
    this.getAllDoctors();
  }

  getAllDoctors(): void {
    this.doctorService.getAllDoctors().subscribe(
      (data: any) => {
        if (data && data.status === 'success' && Array.isArray(data.data.doctors)) {
          this.doctors = data.data.doctors;
        } else {
          console.error('Invalid data format:', data);
        }
      },
      (error: HttpErrorResponse) => {
        console.error('Error fetching doctors:', error);
      }
    );
  }

  deleteSingleDoctor(id: number): void {
    this.doctorService.deleteDoctor(id).subscribe(
      (response: any) => {
        console.log('Doctor deleted:', response);
        this.getAllDoctors(); 
      },
      (error) => {
        console.error('Error deleting doctor:', error);
      }
    );
  }
}

