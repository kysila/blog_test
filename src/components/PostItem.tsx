import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

interface PostItemProps {
    data: {
        title: string;
        body: string;
        id: number;
    };
    className?: string;
}

const Post = styled(Link)`
    margin-bottom: 20px;
    display: block;
    width: 48%;
    min-height: 100px;
    overflow: hidden;
    text-decoration: none;
    color: #000;
    & img {
        width: 100%;
        height: auto;
    }
    & div {
        color: #3eb0ef;
        font-size: 14px;
        font-weight: bold;
        letter-spacing: 0.2px;
        text-transform: uppercase;
    }
    & h3 {
        font-size: 18px;
    }
    & p {
        font-size: 14px;
        font-style: italic;
    }
`;

export const PostItem: React.FC<PostItemProps> = ({ data: { title, body, id } }: PostItemProps): React.ReactElement => {
    return (
        <Post to={`/posts/${id}`}>
            <img src="/img/image.jpeg" alt="notebook" />
            <div>Membership</div>
            <h3>{title}</h3>
            <p>{body}</p>
        </Post>
    );
};
