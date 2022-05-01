import { Component, OnInit } from '@angular/core';
import { ResultService } from '../result.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(private resultService: ResultService) {
    this.resultService.getResults();
  }

  ngOnInit(): void {
  }

}
