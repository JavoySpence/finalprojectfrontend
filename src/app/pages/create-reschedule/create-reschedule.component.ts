import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RescheduleServicesService } from 'src/app/services/reschedule-services.service';

@Component({
  selector: 'app-create-reschedule',
  templateUrl: './create-reschedule.component.html',
  styleUrls: ['./create-reschedule.component.css']
})
export class CreateRescheduleComponent {

  constructor(private rescheduleService: RescheduleServicesService) { }

  createReschedule(rescheduleForm: NgForm): void {
    if (rescheduleForm.valid) {
      const formData = rescheduleForm.value;
      this.rescheduleService.createReschedule(formData).subscribe(
        (response: any) => {
          console.log('Reschedule created:', response);
          // Optionally, you can navigate to another page or show a success message.
        },
        (error) => {
          console.error('Error creating reschedule:', error);
          // Optionally, you can show an error message to the user.
        }
      );
    }
  }
}
