import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Result } from './domains/Result';

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

  }
}
