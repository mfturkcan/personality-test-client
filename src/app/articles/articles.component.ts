import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../core/spinner/spinner.service';
import { Article } from '../domains/Article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles: Article[] = [];
  errorMessage = "";

  constructor(private articleService: ArticleService, private spinnerService: SpinnerService) { }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles() {
    this.spinnerService.requestStarted();
    this.articleService.getArticles().subscribe({
      next: next => {
        this.articles = next;
        this.spinnerService.requestEnded();
      },
      error: error => {
        this.errorMessage = "We had a trouble with connecting services, please try later.";
        this.spinnerService.requestEnded();
      }
    })
  }

  calculateDays(date: Date) {
    var dateParts = date.toString().split("-");
    var numberDateParts = dateParts.map(part => Number(part.trim()));

    var articleDate = new Date(numberDateParts[0], numberDateParts[1] - 1, numberDateParts[1]);
    console.log(articleDate);
    var dateOfNow = new Date();
    var difference = Math.abs((articleDate.getTime() - dateOfNow.getTime()) / (1000 * 3600 * 24));

    if (difference < 1) return 0;

    return Math.floor(difference);
  }

}
