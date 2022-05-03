import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Result } from '../domains/Result';
import { UserAnswer } from '../domains/UserAnswer';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  url: string = "http://localhost:8080/api/v1/result";
  results!: Result[];

  constructor(private httpClient: HttpClient) {

  }

  getResults() {
    this.httpClient.get<Result>(this.url).subscribe((data: any) => {
      console.log(data);
      this.results = data;
    });

    return this.results;
  }

  sendResult(userAnswer: UserAnswer): Result | undefined {
    // Call httpClient for adding result
    let result;
    this.httpClient.post<UserAnswer>(this.url, userAnswer).subscribe((data: any) => {
      result = data;
    });

    return result;
  }
}
