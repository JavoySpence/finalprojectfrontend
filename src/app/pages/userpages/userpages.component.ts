import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-userpages',
  templateUrl: './userpages.component.html',
  styleUrls: ['./userpages.component.css']
})
export class UserpagesComponent {

  constructor(private authService: AuthServiceService, private router: Router) {} 
  logout() {
    console.log("Logging out...");
    this.authService.logout();
    this.router.navigate(['/user-login2']);
  }

}
