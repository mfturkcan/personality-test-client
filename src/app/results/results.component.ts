import { Component, OnInit } from '@angular/core';
import { Result } from '../domains/Result';
import { ResultService } from '../services/result.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  results: Result[] = [];
  constructor(private resultService: ResultService) {

    // TODO: insert after guaranitee that it wont be null.
    // this.results = this.resultService.getResults().sort((r1, r2) => r1.date < r2.date ? -1 : 1);
  }

  ngOnInit(): void {
    this.getResults();
  }

  getResults() {
    this.results = this.resultService.getResults();
  }

}
