import { ViewportScroller } from '@angular/common';
import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpinnerService } from '../core/spinner/spinner.service';
import { Answer } from '../domains/Answer';
import { Question } from '../domains/Question';
import { Result } from '../domains/Result';
import { UserAnswer } from '../domains/UserAnswer';
import { Gender } from '../enums/gender';
import { QuestionService } from '../services/question.service';
import { ResultService } from '../services/result.service';

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

  constructor(private questionService: QuestionService,
    private resultService: ResultService,
    private scroll: ViewportScroller,
    private router: Router,
    private spinnerService: SpinnerService) { }

  ngOnInit(): void {
    this.getQuestions();
  }

  scrollToTop() {
    this.scroll.scrollToPosition([0, 0]);
  }

  getQuestions() {
    this.spinnerService.requestStarted();
    this.questionService.getQuestions().then(data => {
      this.questions = data.sort((q1, q2) => {
        if (q1.questionNumber < q2.questionNumber) return -1;
        else if (q1.questionNumber == q2.questionNumber) return 0;
        else return 1;
      });;

      this.spinnerService.requestEnded();
    });
  }

  handleSubmit(formValue: any) {
    this.spinnerService.requestStarted();
    this.answers = [];

    this.name = formValue["name"];
    this.gender = formValue["gender"];
    this.email = formValue["email"];
    this.isPublic = formValue["isPublic"];

    for (let i = 0; i < this.questions.length; i++) {

      let answer = new Answer(formValue["answer" + i],
        this.questions[i]);

      this.answers.push(answer);
    }

    let user = new UserAnswer(this.answers, this.gender, this.name, this.email, this.isPublic);

    this.resultService.sendResult(user).subscribe(result => {
      if (result) {
        this.router.navigate(['/userResult', result.id]);
        this.spinnerService.requestEnded();
      }
    });

  }

}
