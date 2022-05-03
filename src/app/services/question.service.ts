import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../domains/Question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  questions?: Question[];
  constructor(private httpClient: HttpClient) { }

  getQuestions(): Observable<Question[]> {
    return new Observable(observer => {

      if (this.questions) {
        observer.next(this.questions);
        return observer.complete();
      }

      this.httpClient.get<Question[]>("http://localhost:8080/api/v1/question").subscribe((data: Question[]) => {
        console.log(data);
        this.questions = data.sort((q1, q2) => {
          if (q1.questionNumber < q2.questionNumber) return -1;
          else if (q1.questionNumber == q2.questionNumber) return 0;
          else return 1;
        });;
      });

      observer.next(this.questions);
      observer.complete();
    });
  }
}
