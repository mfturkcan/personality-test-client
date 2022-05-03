import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Result } from '../domains/Result';
import { ResultService } from '../services/result.service';

@Component({
  selector: 'app-user-result',
  templateUrl: './user-result.component.html',
  styleUrls: ['./user-result.component.css']
})
export class UserResultComponent implements OnInit {

  private result?: Result;

  constructor(private resultService: ResultService,
    private route: ActivatedRoute,
    private client: HttpClient) {


  }

  ngOnInit(): void {
    this.getResultWithResultId();
  }

  getResultWithResultId() {
    const routeParams = this.route.snapshot.paramMap;
    const resultId = Number(routeParams.get('resultId'));

    this.client.get<Result>("http://localhost:8080/api/v1/result/" + resultId).subscribe((data: Result) => {
      this.result = data;
      console.log(this.result);
    });
  }

}
