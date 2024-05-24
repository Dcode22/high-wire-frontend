import { Store } from "@ngrx/store";
import { ArticlesActions } from "./articles.actions";
import { selectAllArticles, selectSelectedArticle } from "./articles.selectors";
import { Injectable } from "@angular/core";
import { Article } from "projects/data-models/src/public-api";

@Injectable({providedIn: 'root'})
export class ArticlesFacade {
    constructor(private store: Store){}
    allArticles$ = this.store.select(selectAllArticles);
    selectedArticle$ = this.store.select(selectSelectedArticle);
    getArticles(){
        this.store.dispatch(ArticlesActions.getArticles());
    }
    getArticle(articleId: string){
        this.store.dispatch(ArticlesActions.getArticle({articleId}))
    }
    createArticle(newArticleData: Partial<Article>){
        this.store.dispatch(ArticlesActions.createArticle({newArticleData}))
    }
    editArticle(articleId: string, articleData: Partial<Article>){
        this.store.dispatch(ArticlesActions.editArticle({articleId, articleData}))
    }
    upvoteArticle(articleId: string, userId: string){
        this.store.dispatch(ArticlesActions.upvoteArticle({articleId, userId}))
    }
    downvoteArticle(articleId: string, userId: string){
        this.store.dispatch(ArticlesActions.downvoteArticle({articleId, userId}))
    }
    removeArticleUpvote(articleId: string, userId: string){
        this.store.dispatch(ArticlesActions.removeArticleUpvote({articleId, userId}))
    }
    removeArticleDownvote(articleId: string, userId: string){
        this.store.dispatch(ArticlesActions.removeArticleDownvote({articleId, userId}))
    }
}