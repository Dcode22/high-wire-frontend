import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ArticlesService } from "projects/services/src/public-api";
import { ArticlesActions } from "./articles.actions";
import { catchError, first, map, mergeMap, of } from "rxjs";
import { Router } from "@angular/router";

@Injectable()
export class ArticlesEffects {
  constructor(
    private actions$: Actions,
    private articlesService: ArticlesService,
    private router: Router
  ) {}

  getArticles$ = createEffect(() => 
    this.actions$.pipe(
        ofType(ArticlesActions.getArticles),
        mergeMap(() => {
          console.log('getArticles effect')
            return this.articlesService.getArticles().pipe(
                map(articles => {
                  console.log('articles: ', articles); 
                  return ArticlesActions.getArticlesSuccess({articles})
                }),
                catchError(error => of(ArticlesActions.getArticlesFailure({error})))
            )
        })
    )
  );

  getArticle$ = createEffect(() => 
    this.actions$.pipe(
      ofType(ArticlesActions.getArticle),
      mergeMap((action) => 
        this.articlesService.getArticle(action.articleId).pipe(
          map(article => ArticlesActions.getArticleSuccess({article})),
          catchError(error => of(ArticlesActions.getArticleFailure({error})))
        )
      )
    )
  );
  
  createArticle$ = createEffect(() => 
    this.actions$.pipe(
      ofType(ArticlesActions.createArticle),
      mergeMap((action) => 
        this.articlesService.createArticle(action.newArticleData).pipe(
          map(article => {
            this.router.navigateByUrl('/articles/' + article._id)
            return ArticlesActions.createArticleSuccess({article})
          }),
          catchError(error => of(ArticlesActions.createArticleFailure({error})))
        )
      )
    )
  )

  editArticle$ = createEffect(() => 
    this.actions$.pipe(
      ofType(ArticlesActions.editArticle), 
      mergeMap((action) => 
        this.articlesService.editArticle(action.articleId, action.articleData).pipe(
          map(article => {
            this.router.navigateByUrl('/articles/' + article._id)
            return ArticlesActions.editArticleSuccess({article})
          }), 
          catchError(error => of(ArticlesActions.editArticleFailure({error})))
        )
      )
    )
  )

  upvoteArticle$ = createEffect(() => 
    this.actions$.pipe(
      ofType(ArticlesActions.upvoteArticle), 
      mergeMap((action) => 
        this.articlesService.upvoteArticle(action.articleId, action.userId).pipe(
          map((res) => {
            return ArticlesActions.upvoteArticleSuccess({article: res.article, user: res.user})
          }), 
          catchError(error => of(ArticlesActions.upvoteArticleFailure({error})))
        )
      )
    )
  )

  downvoteArticle$ = createEffect(() => 
    this.actions$.pipe(
      ofType(ArticlesActions.downvoteArticle), 
      mergeMap((action) => 
        this.articlesService.downvoteArticle(action.articleId, action.userId).pipe(
          map((res) => {
            return ArticlesActions.downvoteArticleSuccess({article: res.article, user: res.user})
          }), 
          catchError(error => of(ArticlesActions.downvoteArticleFailure({error})))
        )
      )
    )
  )


  removeArticleUpvote$ = createEffect(() => 
    this.actions$.pipe(
      ofType(ArticlesActions.removeArticleUpvote),
      mergeMap((action)=> 
        this.articlesService.removeUpvote(action.articleId, action.userId).pipe(
          map(res => ArticlesActions.removeArticleUpvoteSuccess({article: res.article, user: res.user})),
          catchError(error => of(ArticlesActions.removeArticleUpvoteFailure({error})))
        )
      )
    )
  )

  removeArticleDownvote$ = createEffect(() => 
    this.actions$.pipe(
      ofType(ArticlesActions.removeArticleDownvote),
      mergeMap((action)=> 
        this.articlesService.removeDownvote(action.articleId, action.userId).pipe(
          map(res => ArticlesActions.removeArticleDownvoteSuccess({article: res.article, user: res.user})),
          catchError(error => of(ArticlesActions.removeArticleDownvoteFailure({error})))
        )
      )
    )
  )       















}