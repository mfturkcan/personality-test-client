export class TriatResult {

  constructor(
    groupName: string,
    firstTraitName: string,
    secondTraitName: string,
    firstTraitPoint: number,
    secondTraitPoint: number
  ) {
    this.groupName = groupName
    this.firstTraitName = firstTraitName
    this.secondTraitName = secondTraitName
    this.firstTraitPoint = firstTraitPoint
    this.secondTraitPoint = secondTraitPoint
  }


  groupName: string;
  firstTraitName: string;
  secondTraitName: string;
  firstTraitPoint: number;
  secondTraitPoint: number;
}
