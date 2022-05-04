import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Result } from '../domains/Result';
import { TriatResult } from '../domains/TraitResult';
import { ResultService } from '../services/result.service';
import * as _ from 'lodash';
import { Dictionary } from 'lodash';
import { PersonalityTrait } from '../domains/PersonalityTrait';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-result',
  templateUrl: './user-result.component.html',
  styleUrls: ['./user-result.component.css']
})
export class UserResultComponent implements OnInit {

  public result?: Result;
  public traitResults: TriatResult[] = [];
  private url: string = environment.serverUrl + 'api/v1/result/';

  constructor(private resultService: ResultService,
    private route: ActivatedRoute,
    private client: HttpClient) {
  }

  ngOnInit(): void {
    this.getResultWithResultId();
  }

  getResultWithResultId() {
    this.traitResults = [];
    const routeParams = this.route.snapshot.paramMap;
    const resultId = Number(routeParams.get('resultId'));

    this.client.get<Result>(this.url + resultId).subscribe((data: Result) => {
      if (data) {
        this.result = data;

        this.traitResults = _(this.result?.traits).groupBy('personalityTraitGroup')
          .map((traitDic, name) => {

            return new TriatResult(name.split('_')[2],
              traitDic[0].personalityTraitType.split('_')[2],
              traitDic[1].personalityTraitType.split('_')[2],
              traitDic[0].totalPoint, traitDic[1].totalPoint);
          }).value();
      }
      console.log(this.result);
    });
  }

}
