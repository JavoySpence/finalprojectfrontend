// register-admin.component.ts
import { Component } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service'; // Adjust the path if necessary
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.css']
})
export class RegisterAdminComponent {
  errorMessage: string | null = null;

  constructor(private authService: AuthServiceService) {}

  onSubmit(registerForm: NgForm) {
    if (registerForm.valid) {
      console.log('Form Data:', registerForm.value); // Log form data for debugging

      this.authService.registerUser(registerForm.value).subscribe(
        (response: any) => {
          console.log('User registered successfully', response);
          this.errorMessage = null; // Clear any previous error messages
          // Handle success (e.g., navigate to another page, show a success message, etc.)
        },
        (error: any) => {
          console.error('Error registering user', error);
          // Handle error (e.g., show an error message)
          if (error.status === 400 && error.error.message === 'User already exists') {
            this.errorMessage = 'User already exists. Please try with a different email.';
          } else {
            this.errorMessage = 'An unexpected error occurred. Please try again later.';
          }
        }
      );
    }
  }
}
