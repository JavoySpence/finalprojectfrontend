import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private API_URL = 'http://localhost:8081/api/v1/feedback';

  constructor(private http: HttpClient) { }

  createFeedback(feedbackData: any): Observable<any> {
    return this.http.post<any>(this.API_URL, feedbackData)
      .pipe(
        map((res) => {
          return res;
        })
      );
  } 

  getFeedbacks(): Observable<any> {
    return this.http.get<any>(this.API_URL)
      .pipe(
        map((res) => {
          return res;
        })
      );
  } 

  deleteFeedback(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/${id}`); 
  }

  getSingleFeedback(id: number): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/${id}`); 
  }
}


