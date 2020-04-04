import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import styled from 'styled-components';

import { Header } from '../commons/Header';
import { PostDetails } from '../interfaces';

interface PostPageProps {
    history: any;
    location: any;
    match: {
        params: {
            postId: string;
        };
    };
}

const Section = styled.main`
    margin-top: 64px;
    padding-bottom: 4vw;
    & div {
        margin: 0 auto;
        padding: 60px 11vw 50px;
        max-width: 1040px;
        width: 100%;
        & h1 {
            margin-bottom: 20px;
            font-size: 40px;
            font-weight: 700;
        }
        & p {
            margin: 20px 0 0;
            color: #738a94;
            font-size: 20px;
            line-height: 1.4em;
        }
    }
    & img {
        display: block;
        width: 100%;
        height: auto;
    }
`;

const Comments = styled.div`
    margin: 0 auto;
    padding: 60px 11vw 50px;
    max-width: 1040px;
    width: 100%;
`;

export const PostPage: React.FC<PostPageProps> = ({
    match: {
        params: { postId },
    },
}: PostPageProps): React.ReactElement => {
    window.scrollTo(0, 0);
    const [state, setState] = useState<PostDetails>({
        title: '',
        body: '',
    });
    useEffect(() => {
        axios
            .get(`https://simple-blog-api.crew.red/posts/${postId}?_embed=comments`)
            .then((data: AxiosResponse<any>) => {
                setState({ ...data.data });
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [postId]);
    return (
        <>
            <Header />
            <Section>
                <div>
                    <h1>{state.title}</h1>
                    <p>{state.body}</p>
                </div>
                <img src="/img/image.jpeg" alt="Notebook" />
                <Comments>Post comments...</Comments>
            </Section>
        </>
    );
};
