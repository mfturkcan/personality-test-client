import { Gender } from "../enums/gender";
import { PersonalityTrait } from "./PersonalityTrait";

export class Result {

  constructor(
    id: number,
    personName: string,
    email: string,
    gender: Gender,
    traits: PersonalityTrait[],
    publicResult: boolean,
    date: Date
  ) {
    this.id = id;
    this.personName = personName;
    this.email = email;
    this.gender = gender;
    this.traits = traits;
    this.publicResult = publicResult;
    this.date = date;
  }


  id: number;
  personName: string;
  email: string;
  gender: Gender;
  traits: PersonalityTrait[];
  publicResult: boolean;
  date: Date;
}
