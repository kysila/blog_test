import React, { useState } from 'react';
import axios from 'axios';

import styled from 'styled-components';

import { Header } from '../commons/Header';

interface PostInfo {
    title: string;
    body: string
}

const Section = styled.main`
    margin: 64px auto;
    padding: 60px 11vw 50px;
    & h1 {
        margin-bottom: 20px;
        font-size: 40px;
        font-weight: 700;
    }
    & div > input,
    label,
    textarea,
    button {
        display: block;
        margin: 10px 0;
    }
    & label {
        font-size: 20px;
    }
    & input,
    textarea {
        font-size: 16px;
        width: 50%;
    }
    & #title {
        height: 30px;
        padding-left: 10px;
    }
    & #text {
        padding: 10px;
        height: 200px;
    }
    & #submit {
        width: 20%;
        height: 40px;
        font-size: 20px;
        background-color: #000;
        color: #fff;
        border: 0;
        outline: none;
        cursor: pointer;
    }
`;

export const NewPost: React.FC = (): React.ReactElement => {
    const [state, setState] = useState<PostInfo>({
        title: '',
        body: '',
    });
    const changeTitleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({
            ...state,
            title: e.target.value,
        });
    };

    const changeTextHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setState({
            ...state,
            body: e.target.value,
        });
    };

    const publishPost = () => {
        const data = JSON.stringify({
            title: state.title,
            body: state.body,
        });

        axios.post('https://simple-blog-api.crew.red/posts', data, {
            headers: {
                'Content-type': 'application/json',
            },
        });
    };

    return (
        <>
            <Header />
            <Section>
                <h1>Create a new post!</h1>
                <div>
                    <label htmlFor="title">Enter post title</label>
                    <input type="text" id="title" onChange={changeTitleHandler} />
                    <label htmlFor="text">Enter your text</label>
                    <textarea id="text" onChange={changeTextHandler} />
                    <button id="submit" onClick={publishPost}>
                        Publish post
                    </button>
                </div>
            </Section>
        </>
    );
};
