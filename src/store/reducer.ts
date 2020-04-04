import { createStore } from 'redux';

import { Post, GET_POSTS_FROM_DB, GetPostsAction } from './types';

interface Store {
    data: Post[];
}

const initialState: Store = {
    data: [],
};

function reducer(state: Store = initialState, action: GetPostsAction): Store {
    switch (action.type) {
        case GET_POSTS_FROM_DB:
            return {
                data: [...action.payload],
            };
        default:
            return state;
    }
}

export default createStore(reducer, initialState);
