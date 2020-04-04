import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

const HeaderWrapper = styled.header`
    padding: 20px;
    width: 100%;
    height: 75px;
    background-color: black;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const LogoImg = styled.img`
    margin-right: 50px;
    display: block;
    width: 50px;
    height: auto;
`;

const LinkItem = styled(NavLink)`
    margin-right: 30px;
    font-size: 16px;
    text-transform: uppercase;
    text-decoration: none;
    color: #fff;
`;

export const Header: React.FC = (): React.ReactElement => {
    return (
        <HeaderWrapper>
            <LogoImg src="/img/react.svg" alt="Logotype" />
            <div>
                <LinkItem to="/">Blog</LinkItem>
                <LinkItem to="/posts/new">Create a new post</LinkItem>
            </div>
        </HeaderWrapper>
    );
};
