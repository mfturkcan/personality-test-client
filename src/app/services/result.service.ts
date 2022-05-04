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

  getResults(): Promise<Result[]> {
    return this.httpClient.get<Result>(this.url).pipe(map((data: any) => { return data; })).toPromise();
  }

  sendResult(userAnswer: UserAnswer): Observable<Result> {
    // Call httpClient for adding result
    let result = new Subject<Result>();
    this.httpClient.post<UserAnswer>(this.url, userAnswer).subscribe((data: any) => {
      result.next(data);
    });

    return result.asObservable();
  }
}
