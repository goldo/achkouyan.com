import App, { Container } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { createGlobalStyle } from 'styled-components'

import { SIZE_4, SIZE_3, SIZE_2, SIZE_1 } from 'config'

const GlobalStyle = createGlobalStyle`
  *,*:after,*:before {
    box-sizing:inherit;
  }

  html {
    box-sizing:border-box;
    font-size:62.5%
  }


  body {
    display: flex;
    font-family: 'Fira Mono', monospace;
    font-size: 1.6rem;
    font-weight: 400;
    letter-spacing: .0625em;
    line-height: 1.8em;
    margin: 0;
    padding: 0;

    @media (max-width: ${SIZE_4}px) {
      font-size: 1.5rem;
    }

    @media (max-width: ${SIZE_3}px) {
      font-size: 1.4rem;
    }

    @media (max-width: ${SIZE_2}px) {
      font-size: 1.3rem;
    }

    @media (max-width: ${SIZE_1}px) {
      font-size: 1.2rem;
    }

  }

  #__next {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  a {
    font-weight: 700;
    color: inherit;
    text-decoration: none;
    background-color: transparent;
    cursor: pointer;
  }

  p {
    margin: 2em 0
  }
`

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <GlobalStyle />
        <Head>
          <title>Franck Achkouyan | Fullstack JS Developer</title>
        </Head>
        <Component {...pageProps} />
      </Container>
    )
  }
}
