import { Gender } from "../enums/gender";
import { PersonalityTrait } from "./PersonalityTrait";

export class Result {

  constructor(
    id: number,
    personName: string,
    email: string,
    gender: Gender,
    traits: PersonalityTrait[],
    isPublic: boolean,
    date: Date
  ) {
    this.id = id;
    this.personName = personName;
    this.email = email;
    this.gender = gender;
    this.traits = traits;
    this.isPublic = isPublic;
    this.date = date;
  }


  id: number;
  personName: string;
  email: string;
  gender: Gender;
  traits: PersonalityTrait[];
  isPublic: boolean;
  date: Date;
}
