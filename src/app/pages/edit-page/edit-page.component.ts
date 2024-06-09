import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppointmentService } from 'src/app/services/appointment.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {
  id: number = 0;
  @ViewChild('appointmentForm') appointmentForm?: NgForm;

  constructor(
    private appointmentService: AppointmentService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    if (this.id > 0) {
      this.appointmentService.singleAppointment(this.id).subscribe(res => {
        if (res['status'] === 'success') {
          const dataAppointment = res['data']['appointment'];
          this.appointmentForm?.form.patchValue({
            first_name: dataAppointment['first_name'],
            last_name: dataAppointment['last_name'],
            sex: dataAppointment['sex'],
            DOB: dataAppointment['DOB'],
            appointment_date: dataAppointment['appointment_date'],
            title: dataAppointment['title'],
            reason_for_visit: dataAppointment['reason_for_visit'],
            doctor_name: dataAppointment['doctor_name'],
            phone: dataAppointment['phone'],
            medical_history: dataAppointment['medical_history'],
            medications_taken: dataAppointment['medications_taken'],
            email: dataAppointment['email']
          });
        }
      });
    }
  }
  

  updateAppointment(oForm: NgForm): void {
    if (oForm.valid) {
      this.appointmentService.updateAppointment(this.id, oForm.value).subscribe(res => {
        if (res['status'] === 'success') {
          this.router.navigateByUrl('/appointments');
          Swal.fire(
            'UPDATED'
          );
        }
      });
    }
  }
}
