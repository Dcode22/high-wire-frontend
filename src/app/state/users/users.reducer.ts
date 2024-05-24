import { createReducer, on } from "@ngrx/store";
import { User } from "projects/data-models/src/public-api";
import { UsersActions } from './users.actions';
import { EntityAdapter, EntityState, createEntityAdapter } from "@ngrx/entity";
import { ArticlesActions } from "../articles/articles.actions";

export interface UsersState extends EntityState<User> {
    selectedId: string | null;
}

export const usersAdapter: EntityAdapter<User> = createEntityAdapter<User>({
    selectId: (user) => user._id
});
  
export const initialState: UsersState = usersAdapter.getInitialState({
    selectedId: null
});
export const usersReducer = createReducer(
    initialState,
    on(UsersActions.getUserSuccess, (state, {user}) => usersAdapter.upsertOne(user, {...state, selectedId: user._id})),
    on(UsersActions.editUserSuccess, (state, {user}) => usersAdapter.updateOne({id: user._id, changes: user}, {...state, selectedId: user._id})),
    on(ArticlesActions.upvoteArticleSuccess, ArticlesActions.downvoteArticleSuccess, (state, {user}) => usersAdapter.updateOne({id: user._id, changes: user}, state)),
    on(ArticlesActions.removeArticleDownvoteSuccess, ArticlesActions.removeArticleUpvoteSuccess, (state, {user}) => usersAdapter.updateOne({id: user._id, changes: user}, state)),
)