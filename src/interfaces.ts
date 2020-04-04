export interface Post {
    title: string;
    body: string;
    id: number;
}

export interface PostDetails {
    title: string;
    body: string;
    id?: number;
    comments?: [];
}
