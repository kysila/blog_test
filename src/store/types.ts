export const GET_POSTS_FROM_DB = 'GET_POSTS_FROM_DB';

export interface Post {
    title: string;
    body: string;
    id: number;
}

export interface GetPostsAction {
    type: typeof GET_POSTS_FROM_DB;
    payload: Post[];
}
