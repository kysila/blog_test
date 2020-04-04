import React from 'react';
import ReactDOM from 'react-dom';

import { createGlobalStyle } from 'styled-components';
import App from './App';
import * as serviceWorker from './serviceWorker';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background-color: rgb(255, 255, 234);
        font-family: 'Montserrat', sans-serif;
    }
    section {
        width: 90%;
        margin: 0 auto;
        padding: 30px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`;

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle />
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
