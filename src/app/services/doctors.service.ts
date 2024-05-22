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

  allDoctors(): Observable<any> {
    return this.http.get<any>(this.API_URL)
      .pipe(
        map((res) => {
          return res;
        })
      );
    }


}
