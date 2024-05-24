import { createReducer, on } from "@ngrx/store";
import { Article } from "projects/data-models/src/public-api";
import { ArticlesActions } from './articles.actions';
import { EntityAdapter, EntityState, createEntityAdapter } from "@ngrx/entity";

export interface ArticlesState extends EntityState<Article> {
    selectedId: string | null;
}

export const articlesAdapter: EntityAdapter<Article> = createEntityAdapter<Article>({
    selectId: (article) => article._id
});
  
export const initialState: ArticlesState = articlesAdapter.getInitialState({
    selectedId: null
});
export const articlesReducer = createReducer(
    initialState,
    on(ArticlesActions.getArticlesSuccess, (state, { articles }) =>  articlesAdapter.setAll(articles, state)),
    on(ArticlesActions.getArticleSuccess, (state, {article}) => articlesAdapter.upsertOne(article, {...state, selectedId: article._id})),
    on(ArticlesActions.createArticleSuccess, (state, {article}) => articlesAdapter.addOne(article, {...state, selectedId: article._id})),
    on(ArticlesActions.editArticleSuccess, (state, {article}) => articlesAdapter.upsertOne(article, {...state, selectedId: article._id})),
    on(ArticlesActions.upvoteArticleSuccess, ArticlesActions.downvoteArticleSuccess, (state, {article}) => articlesAdapter.updateOne({id: article._id, changes: article}, state)),
    on(ArticlesActions.removeArticleDownvoteSuccess, ArticlesActions.removeArticleUpvoteSuccess, (state, {article}) => articlesAdapter.updateOne({id: article._id, changes: article}, state))
)