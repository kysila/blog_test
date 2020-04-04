import axios, { AxiosResponse } from 'axios';

import { GET_POSTS_FROM_DB, GetPostsAction } from './types';

export const getPostsFromDB = () => (dispatch: GetPostsAction) => {
    axios.get('https://simple-blog-api.crew.red/posts').then((data: AxiosResponse<any>) => {
        // @ts-ignore
        dispatch({
            type: GET_POSTS_FROM_DB,
            payload: [...data.data],
        });
    });
};
