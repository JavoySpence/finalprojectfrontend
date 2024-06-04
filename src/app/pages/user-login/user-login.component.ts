import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {


  constructor(private authService: AuthServiceService, private router: Router) {}

  ngOnInit(): void {
   
    
  }

  login(userData: NgForm) {
  

   

    this.authService.loginUser(userData.value).subscribe(
      (res: any) => {
        if (res.status === 'success') {
          //First you need to fetch Token
          this.authService.authToken = res['data']!['token'];
          // Then you need to save the Token to localStorage
          this.authService.saveAuthToken();
          console.log(`Response ${JSON.stringify(res)}`);
          this.authService.getCurrentUser(() => {
            this.router.navigate(['/user-login']);
          });
        } else {
          alert('Login failed');
        }
      },
      (err: any) => {
        console.error('Login error:', err);
        
      }
    );
  }
}
