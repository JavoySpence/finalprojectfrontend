import { Component, OnInit } from '@angular/core';
import { DoctorsService } from 'src/app/services/doctors.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'see-doctors',
  templateUrl: './see-doctors.component.html',
  styleUrls: ['./see-doctors.component.css']
})
export class SeeDoctorsComponent implements OnInit {
  doctors: any[] = [];
  filteredDoctors: any[] = [];
  searchTerm: string = '';
  p: number = 1;  // Current page number

  constructor(private doctorService: DoctorsService) { }

  ngOnInit(): void {
    this.getAllDoctors();  
  }

  getAllDoctors(): void {
    this.doctorService.getAllDoctors().subscribe(
      (data: any) => {
        if (data && data.status === 'success' && Array.isArray(data.data.doctors)) {
          this.doctors = data.data.doctors;
          this.filteredDoctors = this.doctors;
        } else {
          console.error('Invalid data format:', data);
        }
      },
      (error: HttpErrorResponse) => {
        console.error('Error fetching doctors:', error);
      }
    );
  }

  filterDoctors(): void {
    this.filteredDoctors = this.doctors.filter(doctor => 
      doctor.first_name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      doctor.last_name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      doctor.speciality.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
