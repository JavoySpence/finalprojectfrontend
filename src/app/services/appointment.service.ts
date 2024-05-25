import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private API_URL = 'http://localhost:8081/api/v1/appointments';

  constructor(private _http: HttpClient) { }

  appointmentInfo: any = {};

  newAppointments(info: any = {}): Observable<any> {
    return this._http.post<any>(this.API_URL, info)
    .pipe(
      map((res) => {
        return res;
      })
    );
  }

  allAppointments(page: number = 0, size: number = 5): Observable<any> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    
    return this._http.get<any>(this.API_URL, { params })
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  deleteAppointment(id: number): Observable<any> {
    return this._http.delete<any>(`${this.API_URL}/${id}`).pipe(
      map((res) => {
        return res;
      })
    );
  }

  singleAppointment(id: number): Observable<any> {
    return this._http.get<any>(`${this.API_URL}/${id}`).pipe(
      map((res) => {
        return res;
      })
    );
  }

  updateAppointment(id: number, info: any): Observable<any> {
    return this._http.put<any>(`${this.API_URL}/${id}`, info).pipe(
      map((res) => {
        return res;
      })
    );
  }
}
