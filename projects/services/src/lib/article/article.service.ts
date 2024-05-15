import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from 'projects/data-models/src/lib/models/article.models';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }
  getArticle(articleId: string): Observable<Article>{
    return this.http.get<Article>(`${environment.apiEndpoint}/articles/${articleId}`)
      .pipe(
        catchError(error => throwError(() => error))
      )
  };

  getArticles() {
    return this.http.get<Article[]>(`${environment.apiEndpoint}/articles`)
    .pipe(
      catchError(error => throwError(() => error))
    )
  }

  createArticle(){

  };

  editArticle(){

  };
}
