import { Gender } from "../enums/gender";
import { Answer } from "./Answer";

export class UserAnswer {
  constructor(questionAnswers: Answer[],
    gender: Gender,
    name: string,
    email: string,
    publicResult: boolean) {
    this.questionAnswers = questionAnswers;
    this.gender = gender;
    this.name = name;
    this.email = email;
    this.publicResult = publicResult;
  }

  questionAnswers: Answer[];
  gender: Gender;
  name: string;
  email: string;
  publicResult: boolean;
}
