import { Component, OnInit } from '@angular/core';
import { DoctorsService } from 'src/app/services/doctors.service'; // Update the import path as necessary

@Component({
  selector: 'app-doctors-dropdown',
  templateUrl: './doctors-dropdown.component.html',
  styleUrls: ['./doctors-dropdown.component.css']
})
export class DoctorsDropdownComponent implements OnInit {
  doctors: any[] = [];

  constructor(private doctorsService: DoctorsService) { }

  ngOnInit(): void {
    this.getAllDoctors();
  }

  getAllDoctors(): void {
    this.doctorsService.getAllDoctors().subscribe(
      (data: any) => {
        if (data && data.status === 'success' && Array.isArray(data.data.doctors)) {
          this.doctors = data.data.doctors;
          console.log('Fetched doctor names:', this.doctors); // Log doctors to the console
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

