import { Component, OnInit } from '@angular/core';
import { Answer } from '../domains/Answer';
import { Question } from '../domains/Question';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  questions: Question[] = [];
  answers: Answer[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getQuestions();
  }

  getQuestions() {
    this.questions.push(
      new Question(0, "test", 2, "test", "test", "test", "test", "test"),
      new Question(1, "test1", 2, "test1", "test1", "test1", "test1", "test1"),
      new Question(2, "test2", 2, "test2", "test2", "test2", "test2", "test2")
    );
  }

  handleSubmit(formValue: any) {
    for (let i = 0; i < this.questions.length; i++) {
      this.answers.push(new Answer(formValue["answer" + i], this.questions[i]));
    }
    console.log(this.answers);
  }

}
