import React from 'react';

import styled from 'styled-components';

const Box = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #000;
    color: #fff;
`;

const H1 = styled.h1`
    font-size: 30px;
`;

const Paragraph = styled.p`
    font-size: 20px;
    font-style: italic;
`;

export const Title: React.FC = (): React.ReactElement => {
    return (
        <Box>
            <H1>React & TypeScript Blog</H1>
            <Paragraph>Real stories & opinions about running an independent membership business.</Paragraph>
        </Box>
    );
};
