import { Component, OnInit } from '@angular/core';
import { Answer } from '../domains/Answer';
import { Question } from '../domains/Question';
import { Gender } from '../enums/gender';

@Component({
  selector: 'app-personality-test',
  templateUrl: './personalityTest.component.html',
  styleUrls: ['./personalityTest.component.css']
})
export class PersonalityTestComponent implements OnInit {
  questions: Question[] = [];
  answers: Answer[] = [];
  name!: string;
  gender!: Gender;
  email!: string;
  isPublic!: boolean;

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
    this.name = formValue["name"];
    this.gender = formValue["gender"];
    this.email = formValue["email"];
    this.isPublic = formValue["isPublic"];

    for (let i = 0; i < this.questions.length; i++) {

      let answer = new Answer(formValue["answer" + i],
        this.questions[i]);

      this.answers.push(answer);
    }
    console.log(this.answers);
    console.log(formValue);
  }

}
