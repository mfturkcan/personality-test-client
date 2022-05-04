import { PersonalityGroups } from "../enums/personality-groups";
import { PersonalityTypes } from "../enums/personality-types";

export class PersonalityTrait {

  constructor(
    traitId: number,
    totalPoint: number,
    personalityTraitGroup: string,
    personalityTraitType: string
  ) {
    this.traitId = traitId
    this.totalPoint = totalPoint
    this.personalityTraitGroup = personalityTraitGroup
    this.personalityTraitType = personalityTraitType
  }


  traitId: number;
  totalPoint: number;
  personalityTraitGroup: string;
  personalityTraitType: string;
}
