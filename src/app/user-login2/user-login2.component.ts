import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-login2',
  templateUrl: './user-login2.component.html',
  styleUrls: ['./user-login2.component.css']
})
export class UserLogin2Component implements OnInit {

  hasError: boolean = false;
  errorMessage: string = '';
  user: any; 
  currentRole: string = ''; 

  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login(oForm: NgForm): void {
    this.authService.loginUser(oForm.value).subscribe(
      (res: any) => {
        if (res['status'] === 'success') {
          this.authService.authToken = res['data']['token'];
          this.authService.saveAuthToken();
          this.authService.getCurrentUser(() => {
            this.user = this.authService.currentUser;
            console.log(`USER DATA ${JSON.stringify(this.user)}`);
            if(this.user.role === 'user') {
              this.router.navigateByUrl('/userpages');
            } else {
             
              this.router.navigateByUrl('/user-dashboard');
            }
          });
        } else {
          console.log(`RESPONSE DATA ${JSON.stringify(res)}`);
        }
      },
      (err: any) => {
        this.hasError = true;
        this.errorMessage = err.error.message;
        console.log(err);
      }
    );
  }
}
