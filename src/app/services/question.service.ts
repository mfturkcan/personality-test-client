import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Question } from '../domains/Question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  questions?: Question[];
  constructor(private httpClient: HttpClient) { }

  getQuestions(): Promise<Question[]> {
    return this.httpClient.get<Question[]>("http://localhost:8080/api/v1/question").pipe(map((data: Question[] | any) => {
      return data;
    })).toPromise();
  }
}
