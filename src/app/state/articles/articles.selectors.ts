import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ArticlesState, articlesAdapter } from './articles.reducer';

export const selectArticlesState = createFeatureSelector<ArticlesState>('articles');

const { selectAll, selectEntities, selectIds, selectTotal } = articlesAdapter.getSelectors();

export const selectAllArticles = createSelector(
  selectArticlesState,
  selectAll
);

export const selectArticleEntities = createSelector(
  selectArticlesState,
  selectEntities
);

export const selectArticleIds = createSelector(
  selectArticlesState,
  selectIds
);

export const selectArticleTotal = createSelector(
  selectArticlesState,
  selectTotal
);

export const selectSelectedArticleId = createSelector(
  selectArticlesState,
  (state: ArticlesState) => state.selectedId
);

export const selectSelectedArticle = createSelector(
  selectArticleEntities,
  selectSelectedArticleId,
  (entities, selectedId) => selectedId ? entities[selectedId] : null
);
