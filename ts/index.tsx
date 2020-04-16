import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './components/FoundationStyles';
import Home from './components/Home';
import Store from './Store';

const container = document.getElementById('contents');

ReactDom.render(
    <div>
        <Provider store={Store}>
            <Home />
        </Provider>
        <ThemeProvider theme={{}}>
            <GlobalStyle theme="" />
        </ThemeProvider>
    </div>,
    container,
);
