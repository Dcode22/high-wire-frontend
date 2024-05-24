export interface Article {
    headline: string;
    subtitle: string;
    headlineImage?: string;
    articleText: string;
    publishedDate: number;
    lastUpdatedDate?: number;
    userId: string,
    authorName: string,
    authorPicture: string,
    upvotes: number;
    downvotes: number;
    _id: string;
}