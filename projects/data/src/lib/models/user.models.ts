export interface User {
    _id: string;
    email: string;
    firstName?: string;
    lastName?: string;
    picture?: string;
    bio?: string;
    location?: string;
    joined: number;
    admin: boolean;
    author: boolean;
}