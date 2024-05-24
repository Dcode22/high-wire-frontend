import { ArticlesState } from "./articles/articles.reducer";
import { UsersState } from "./users/users.reducer";

export interface AppState {
  articles: ArticlesState;
  users: UsersState;
}

