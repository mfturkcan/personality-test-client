import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Result } from '../domains/Result';
import { UserAnswer } from '../domains/UserAnswer';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  url: string = environment.serverUrl + 'api/v1/result';
  results!: Result[];

  constructor(private httpClient: HttpClient) {

  }

  getResults(): Observable<any> {
    return this.httpClient.get<Result>(this.url);
  }

  sendResult(userAnswer: UserAnswer): Observable<any> {
    // Call httpClient for adding result
    return this.httpClient.post<UserAnswer>(this.url, userAnswer);
  }

  getResultById(id: number): Observable<any> {
    return this.httpClient.get<Result>(this.url + '/' + id);
  }
}
