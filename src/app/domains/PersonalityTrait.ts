import { PersonalityGroups } from "../enums/personality-groups";
import { PersonalityTypes } from "../enums/personality-types";

export class PersonalityTrait {

  constructor(
    traitId: number,
    totalPoint: number,
    personalityGroup: PersonalityGroups,
    personalityType: PersonalityTypes
  ) {
    this.traitId = traitId
    this.totalPoint = totalPoint
    this.personalityGroup = personalityGroup
    this.personalityType = personalityType
  }


  traitId: number;
  totalPoint: number;
  personalityGroup: PersonalityGroups;
  personalityType: PersonalityTypes;
}
