import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-admin-pages',
  templateUrl: './admin-pages.component.html',
  styleUrls: ['./admin-pages.component.css']
})
export class AdminPagesComponent {
  
  constructor(
    private authService: AuthServiceService, // Inject AuthService
    private router: Router // Inject Router
  ) { }

  logout() {
    console.log("Logging out..."); 
    this.authService.logout();
    this.router.navigate(['/user-login']);
  }
}

