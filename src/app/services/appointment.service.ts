import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private API_URL = 'http://localhost:8081/api/v1/appointments';
  private API_URL2 = 'http://localhost:8081/api/v1/doctors';

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

  allAppointments(searchTerm: string = '', pageIndex: number = 0, pageSize: number = 10): Observable<any> {
    let params = new HttpParams()
      .set('searchTerm', searchTerm)
      .set('page', pageIndex.toString())
      .set('limit', pageSize.toString());
    
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

  allDoctors(): Observable<any> {
    return this._http.get<any>(this.API_URL2)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }
}
