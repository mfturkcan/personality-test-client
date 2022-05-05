import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Result } from '../domains/Result';
import { TriatResult } from '../domains/TraitResult';
import { ResultService } from '../services/result.service';
import * as _ from 'lodash';
import { Dictionary } from 'lodash';
import { PersonalityTrait } from '../domains/PersonalityTrait';
import { SpinnerService } from '../core/spinner/spinner.service';
import personalityTypes from '../PersonalityTypes';

@Component({
  selector: 'app-user-result',
  templateUrl: './user-result.component.html',
  styleUrls: ['./user-result.component.css']
})
export class UserResultComponent implements OnInit {

  public result?: Result;
  public traitResults: TriatResult[] = [];
  public errorMessage = "";
  public mbtiType: string = "";
  public mbtiArticle = "";

  private articles = [
    {
      first: "Introverted (I) - prefer solitary activities, think before speaking, get exhausted by social interaction.",
      second: "Extraverted (E) - prefer group activities, think while speaking, get energized by social interaction.",
      image: "../../assets/result-images/intro-extra.jpg"
    },
    {
      first: "Intuitive (N) – imaginative, rely on their intuition, absorbed in ideas, focus on what might happen.",
      second: "Sensing (S) – down-to-earth, rely on their senses, absorbed in practical matters, focus on what has happened.",
      image: "../../assets/result-images/sens-intui.jpg",
    },
    {
      first: "Thinking (T) - tough, follow their minds, focus on objectivity and rationality.",
      second: "Feeling (F) – sensitive, follow their hearts, focus on harmony and cooperation.",
      image: "../../assets/result-images/thinking-feeling.jpg",
    },
    {
      first: "Judging (J) – decisive, prefer clear rules and guidelines, see deadlines as sacred, seek closure. ",
      second: "Perceiving (P) – very good at improvising, prefer keeping their options open, relaxed about their work, seek freedom. ",
      image: "../../assets/result-images/judging-perceiving.jpg",
    }
  ];

  constructor(private resultService: ResultService,
    private route: ActivatedRoute,
    private spinnerService: SpinnerService) {
  }

  ngOnInit(): void {
    this.getResultWithResultId();
  }

  getResultWithResultId() {
    this.traitResults = [];
    const routeParams = this.route.snapshot.paramMap;
    const resultId = Number(routeParams.get('resultId'));

    this.spinnerService.requestStarted();

    this.resultService.getResultById(resultId).subscribe({
      next: next => {
        this.result = next;

        this.traitResults = _(this.result?.traits).groupBy('personalityTraitGroup')
          .map((traitDic, name) => {
            let firstTraitName = traitDic[0].personalityTraitType.split('_')[2];
            let secondTraitName = traitDic[1].personalityTraitType.split('_')[2];
            let higherTraitName = firstTraitName;
            let higherPoint = traitDic[0].totalPoint;

            if (traitDic[0].totalPoint < traitDic[1].totalPoint) {
              higherTraitName = secondTraitName;
              higherPoint = traitDic[1].totalPoint;
            }
            if (higherTraitName[0]) this.mbtiType += higherTraitName[0];
            return new TriatResult(name.split('_')[2],
              traitDic[0].personalityTraitType.split('_')[2],
              traitDic[1].personalityTraitType.split('_')[2],
              traitDic[0].totalPoint, traitDic[1].totalPoint,
              higherTraitName, higherPoint);

          }).value();
        this.mbtiArticle = personalityTypes[this.mbtiType];
        console.log(this.mbtiType);

        for (let i = 0; i < this.traitResults.length; i++) {
          this.traitResults[i].groupPhoto = this.articles[i].image;
          this.traitResults[i].firstArticle = this.articles[i].first;
          this.traitResults[i].secondArticle = this.articles[i].second;
        }

        this.spinnerService.requestEnded();
      },
      error: error => {
        this.errorMessage = "Server related error occured! \n" + error.message;
        this.spinnerService.requestEnded();
      }
    });
  }
  sendResults() {
    return false;
  }
}
