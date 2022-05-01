import { Gender } from "../enums/gender";
import { Question } from "./Question";

export class Answer {
  constructor(answer: boolean, question: Question) {
    this.questionAnswer = answer;
    this.question = question;
  }

  questionAnswer: boolean;
  question: Question;
}
