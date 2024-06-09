// auth-service.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private API_URL = 'http://localhost:8081/api/v1/users';
  public authToken?: string;
  public currentUser?: any;
  private tokenKey: string = 'authToken';

  constructor(private http: HttpClient) { }

  private _saveToStorage(key: string, value: any) {
    localStorage.setItem(key, value);
  }

  saveAuthToken(): void {
    this._saveToStorage(this.tokenKey, this.authToken);
  }

  isLoggedIn(): boolean {
    let token = localStorage.getItem(this.tokenKey);
    return token != null && token.length > 0;
  }

  getToken(): string | null {
    return this.isLoggedIn() ? localStorage.getItem(this.tokenKey) : null;
  }

  getProfile(): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/my-profile`)
      .pipe(map((res) => res));
  }

  getCurrentUser(cb: () => void) {
    this.getProfile().subscribe((res) => {
      if (res['status'] === 'success') {
        this.currentUser = res['data']!['user'];
        if (cb) cb();
      }
    });
  }

  registerUser(userData: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/register`, userData);
  }

  loginUser(userData: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/login`, userData);
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.currentUser = null;
  }
  

  protect(): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/verify`);
  }

  isAdmin(): boolean {
    return this.currentUser && this.currentUser.role === 'admin';
  }
}