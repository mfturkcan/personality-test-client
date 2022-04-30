export class Question {
  constructor(
    public id: number,
    public question: string,
    public point: number,
    public traitGroup: string,
    public answerTrue: string,
    public answerFalse: string,
    public caseTrue: string,
    public caseFalse: string) { }

}
