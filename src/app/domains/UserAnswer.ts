import { Gender } from "../enums/gender";
import { Answer } from "./Answer";

export class UserAnswer {
  constructor(answers: Answer[],
    gender: Gender,
    name: string,
    email: string,
    isPublic: boolean) {
    this.answers = answers;
    this.gender = gender;
    this.name = name;
    this.email = email;
    this.isPublic = isPublic;
  }

  answers: Answer[];
  gender: Gender;
  name: string;
  email: string;
  isPublic: boolean;
}
