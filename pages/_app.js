import Footer from "components/Footer"
import Header from "components/Header"
import { Content, Main } from "components/Page"
import { SIZE_1, SIZE_2, SIZE_3, SIZE_4 } from "config"
import App from "next/app"
import Head from "next/head"
import React from "react"
import { createGlobalStyle } from "styled-components"

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

  img {
    width: 100%
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
      <>
        <GlobalStyle />
        <Head>
          <title>Franck Achkouyan | Fullstack JS Developer</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <meta name="author" content="Franck Achkouyan" />
          <meta
            name="description"
            content="I'm a remote 🌍 freelance javascript developer 👨‍💻 specialized in Node, React & GraphQL"
          />
          <meta
            name="keywords"
            content="developer,javascript,react,reactjs,node,nodejs,remote,fullstack,senior,personal,about,blog,front,frontend,back,backend,now.sh,nextjs,zeit,twitter,linkedin,engineer,paris"
          />
          <meta
            name="google-site-verification"
            content="FUbld5Ru23u5T6BOpqQn_wG6l8J_dUunaohq5ZN9Qw4"
          />
        </Head>
        <Main>
          <Header />
          <Content>
            <Component {...pageProps} />
          </Content>
          <Footer />
        </Main>
      </>
    )
  }
}
