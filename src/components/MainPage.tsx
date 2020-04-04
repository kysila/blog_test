import React, { useEffect, useState } from 'react';
// import { connect, ConnectedProps } from 'react-redux';
import axios, { AxiosResponse } from 'axios';

import { Post } from '../interfaces';
import { PostItem } from './PostItem';
import { Header } from '../commons/Header';
import { Title } from './Title';

// import { getPostsFromDB } from '../store/actions';
//
// interface Data {
//     data: [];
// }
//
// const mapStateToProps = (state: Data) => ({
//     data: state.data,
// });
//
// const mapDispatchToProps = {
//     getPostsFromDB,
// };
//
// const connector = connect(mapStateToProps, mapDispatchToProps);
//
// type PropsFromRedux = ConnectedProps<typeof connector>;

export const MainPage: React.FC = () => {
    const [state, setState] = useState<Post[]>([]);

    let posts;

    useEffect(() => {
        axios
            .get('https://simple-blog-api.crew.red/posts')
            .then((data: AxiosResponse<any[]>): void => {
                setState([...data.data]);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    if (state.length > 0) {
        posts = state.map((el: Post, i: number) => <PostItem key={i} data={el} />);
    }

    return (
        <>
            <Header />
            <Title />
            <section>{posts}</section>
        </>
    );
};

// export default connector(MainPage);
