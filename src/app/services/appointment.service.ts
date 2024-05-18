import { HttpClient } from '@angular/common/http';
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
}
