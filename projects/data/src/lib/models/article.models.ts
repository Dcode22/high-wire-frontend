export interface Article {
    headline: string;
    subtitle: string;
    headlineImage?: string;
    articleText: string;
    publishedDate: number;
    userId: string,
    upvotes: number;
    downvotes: number;
    _id: string;
}