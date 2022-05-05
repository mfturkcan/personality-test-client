import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ArticleDto } from '../domains/dtos/ArticleDto';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articleUrl: string = environment.serverUrl + 'api/v1/article';

  constructor(private httpClient: HttpClient) { }

  addArticle(articleDto: ArticleDto): Observable<any> {
    return this.httpClient.post(this.articleUrl, articleDto);
  }
}
