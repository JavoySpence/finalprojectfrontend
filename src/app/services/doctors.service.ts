import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  private API_URL = 'http://localhost:8081/api/v1/doctors';

  constructor(private http: HttpClient) { }

  createNewDoctor(doctorData: any): Observable<any> {
    return this.http.post<any>(this.API_URL, doctorData)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  getSingleDoctor(doctorId: number): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/${doctorId}`)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  updateDoctor(doctorId: number, doctorData: any): Observable<any> {
    return this.http.put<any>(`${this.API_URL}/${doctorId}`, doctorData)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  deleteDoctor(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/${id}`); // Correct interpolation of id here
  }

  getAllDoctors(): Observable<any> {
    return this.http.get<any>(this.API_URL)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }
}
