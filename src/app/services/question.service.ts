import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Question } from '../domains/Question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  questions?: Question[];
  url: string = environment.serverUrl + 'api/v1/question';

  constructor(private httpClient: HttpClient) { }

  getQuestions(): Promise<Question[]> {
    return this.httpClient.get<Question[]>(this.url).pipe(map((data: Question[] | any) => {
      return data;
    })).toPromise();
  }
}
