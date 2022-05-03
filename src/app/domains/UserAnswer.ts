import { Gender } from "../enums/gender";
import { Answer } from "./Answer";

export class UserAnswer {
  constructor(questionAnswers: Answer[],
    gender: Gender,
    name: string,
    email: string,
    isPublic: boolean) {
    this.questionAnswers = questionAnswers;
    this.gender = gender;
    this.name = name;
    this.email = email;
    this.isPublic = isPublic;
  }

  questionAnswers: Answer[];
  gender: Gender;
  name: string;
  email: string;
  isPublic: boolean;
}
