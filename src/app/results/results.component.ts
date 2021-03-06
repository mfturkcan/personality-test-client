import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../core/spinner/spinner.service';
import { Result } from '../domains/Result';
import { ResultService } from '../services/result.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  results: Result[] = [];
  errorMessage = "";
  constructor(private resultService: ResultService, private spinnerService: SpinnerService) {

    // TODO: insert after guaranitee that it wont be null.
    // this.results = this.resultService.getResults().sort((r1, r2) => r1.date < r2.date ? -1 : 1);
  }

  ngOnInit(): void {
    this.getResults();
  }

  getResults() {
    this.spinnerService.requestStarted();
    this.resultService.getResults().subscribe({
      next: next => {
        this.results = next;
        this.spinnerService.requestEnded();
      },
      error: error => {
        this.errorMessage = "Please try later, Error occured during fetching results.";
        this.spinnerService.requestEnded();
      }
    });
  }

}
