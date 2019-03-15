import React, { Component } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Router from 'next/router';
import NProgress from 'nprogress';
import Sidebar from './Sidebar';
import Meta from './Meta';

const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *,
  *:after,
  *:before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
`;

const StyledPage = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
  background: white;
  color: ${props => props.theme.black};
  font-family: 'Open Sans', sans-serif;
`;

const Inner = styled.div`
  max-width: calc(100vw - 250px);
  margin: 0 auto;
  padding: 2rem;
  min-height: 100vh;
  margin-left: ${props => props.width || '250px'};
`;

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <GlobalStyle />
          <Meta />
          <Sidebar />
          <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;