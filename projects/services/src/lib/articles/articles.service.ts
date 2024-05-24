import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from 'projects/data-models/src/lib/models/article.models';
import { User } from 'projects/data-models/src/public-api';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

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

  createArticle(articleData: Partial<Article>){
    return this.http.post<Article>(`${environment.apiEndpoint}/articles`, articleData)
    .pipe(
      catchError(error => throwError(() => error))
    )
  };

  editArticle(articleId: string, articleData: Partial<Article>){
    return this.http.patch<Article>(`${environment.apiEndpoint}/articles/${articleId}`, articleData)
    .pipe(
      catchError(error => throwError(() => error))
    )
  };

  upvoteArticle(articleId: string, userId: string){
    return this.http.get<{article: Article, user: User}>(`${environment.apiEndpoint}/articles/upvote/${articleId}/${userId}`)
    .pipe(
      catchError(error => throwError(() => error))
    )
  }
  
  downvoteArticle(articleId: string, userId: string){
    return this.http.get<{article: Article, user: User}>(`${environment.apiEndpoint}/articles/downvote/${articleId}/${userId}`)
    .pipe(
      catchError(error => throwError(() => error))
    )
  }

  removeUpvote(articleId: string, userId: string){
    return this.http.get<{article: Article, user: User}>(`${environment.apiEndpoint}/articles/remove-upvote/${articleId}/${userId}`)
    .pipe(
      catchError(error => throwError(() => error))
    )
  }
  
  removeDownvote(articleId: string, userId: string){
    return this.http.get<{article: Article, user: User}>(`${environment.apiEndpoint}/articles/remove-downvote/${articleId}/${userId}`)
    .pipe(
      catchError(error => throwError(() => error))
    )
  }
}
