import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RescheduleServicesService {
  private API_URL = 'http://localhost:8081/api/v1/appointment_resche';

  constructor(private http: HttpClient) { }

  getAllReschedules(): Observable<any> {
   
    return this.http.get<any>(this.API_URL)
      .pipe(
        map((res) => {
          
          return res;
        })
      );
  } 
  

  createReschedule(data: any): Observable<any> {
    return this.http.post<any>(this.API_URL, data)
      .pipe(
        map((res) => {
          return res;
        })
      );
  } 

  deleteReschedule(id: number): Observable<any> {
    const deleteUrl = `${this.API_URL}/${id}`;
    return this.http.delete<any>(deleteUrl)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }
}
