export class Question {
  constructor(
    public id: number,
    public question: string,
    public questionNumber: number,
    public caseTruePoint: number,
    public caseFalsePoint: number,
    public traitGroup: string,
    public answerTrue: string,
    public answerFalse: string,
    public caseTrue: string,
    public caseFalse: string,
    public caseAlternative?: string,
    public caseAlternativePoint?: number,
    public answerAlternative?: string,
  ) { }

}
