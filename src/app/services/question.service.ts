import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from '../domains/Question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  questions: Question[] = [];
  constructor(private httpClient: HttpClient) { }

  getQuestions() {
    this.httpClient.get<Question[]>("http://localhost:8080/api/v1/question").subscribe((data: Question[]) => {
      console.log(data);
      this.questions = data;
    });

    this.questions = this.questions.sort((q1, q2) => {
      if (q1.questionNumber < q2.questionNumber) return -1;
      else if (q1.questionNumber == q2.questionNumber) return 0;
      else return 1;
    });

    return this.questions;
  }
}
