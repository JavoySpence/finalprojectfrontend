// auth.guard.ts
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthServiceService } from './services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthServiceService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const requiredRole = next.data['role'];
    if (this.authService.isLoggedIn()) {
      if (!requiredRole || (requiredRole === 'admin' && this.authService.isAdmin())) {
        return true;
      } else {
        this.router.navigateByUrl('/not-authorized'); 
        return false;
      }
    } else { 
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
