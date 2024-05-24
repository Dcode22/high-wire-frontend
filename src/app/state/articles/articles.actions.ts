import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Article, User } from "projects/data-models/src/public-api";

export const ArticlesActions = createActionGroup({
    source: 'Articles',
    events: {
        'Get Articles': emptyProps(),
        'Get Articles Success': props<{articles: Article[]}>(),
        'Get Articles Failure': props<{error: Error}>(),
        'Get Article': props<{articleId: string}>(),
        'Get Article Success': props<{article: Article}>(),
        'Get Article Failure': props<{error: Error}>(),
        'Create Article': props<{newArticleData: Partial<Article>}>(),
        'Create Article Success': props<{article: Article}>(),
        'Create Article Failure': props<{error: Error}>(),
        'Delete Article': props<{articleId: string}>(),
        'Delete Article Success': props<{article: Article}>(),
        'Delete Article Failure': props<{error: Error}>(),
        'Edit Article': props<{articleId: string, articleData: Partial<Article>}>(),
        'Edit Article Success': props<{article: Article}>(),
        'Edit Article Failure': props<{error: Error}>(),
        'Upvote Article': props<{articleId: string, userId: string}>(),
        'Upvote Article Success': props<{article: Article, user: User}>(),
        'Upvote Article Failure': props<{error: Error}>(),
        'Downvote Article': props<{articleId: string, userId: string}>(),
        'Downvote Article Success': props<{article: Article, user: User}>(),
        'Downvote Article Failure': props<{error: Error}>(),
        'Remove Article Upvote': props<{articleId: string, userId: string}>(),
        'Remove Article Upvote Success': props<{article: Article, user: User}>(),
        'Remove Article Upvote Failure': props<{error: Error}>(),
        'Remove Article Downvote': props<{articleId: string, userId: string}>(),
        'Remove Article Downvote Success': props<{article: Article, user: User}>(),
        'Remove Article Downvote Failure': props<{error: Error}>()
    }
})