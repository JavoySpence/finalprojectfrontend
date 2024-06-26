import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthServiceService } from './services/auth-service.service';

@Injectable()
export class MyInterceptorInterceptor implements HttpInterceptor {

  constructor(private authService: AuthServiceService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(this.authService.isLoggedIn()){
      let newRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authService.getToken()}`
        },
      });
      return next.handle( newRequest)
    }
    return next.handle(request);
    
      
  }
}
