import { Component, Injectable, OnInit } from '@angular/core';
import { Answer } from '../domains/Answer';
import { Question } from '../domains/Question';
import { Gender } from '../enums/gender';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-personality-test',
  templateUrl: './personality-test.component.html',
  styleUrls: ['./personality-test.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class PersonalityTestComponent implements OnInit {
  questions: Question[] = [];
  answers: Answer[] = [];
  name!: string;
  gender!: Gender;
  email!: string;
  isPublic!: boolean;

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.getQuestions();
  }

  getQuestions() {
    this.questions = this.questionService.getQuestions();
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
