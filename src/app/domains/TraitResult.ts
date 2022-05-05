export class TriatResult {

  constructor(
    groupName: string,
    firstTraitName: string,
    secondTraitName: string,
    firstTraitPoint: number,
    secondTraitPoint: number,
    higherTraitName: string,
    higherTraitPoint: number
  ) {
    this.groupName = groupName
    this.firstTraitName = firstTraitName
    this.secondTraitName = secondTraitName
    this.firstTraitPoint = firstTraitPoint
    this.secondTraitPoint = secondTraitPoint
    this.higherTraitName = higherTraitName
    this.higherTraitPoint = higherTraitPoint
  }
  higherTraitName: string;
  higherTraitPoint: number;
  groupPhoto = "";
  firstArticle = "";
  secondArticle = "";
  groupName: string;
  firstTraitName: string;
  secondTraitName: string;
  firstTraitPoint: number;
  secondTraitPoint: number;
}
