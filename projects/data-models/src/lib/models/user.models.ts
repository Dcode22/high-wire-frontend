export interface User {
    _id: string;
    admin: boolean;
    author: boolean;
    bio?: string;
    email: string;
    firstName?: string;
    joined: number;
    lastName?: string;
    location?: string;
    picture?: string;
    articleUpvotes?: string[];
    articleDownvotes?: string[];
}