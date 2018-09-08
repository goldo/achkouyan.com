import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, injectGlobal } from 'styled-components'
import { SIZE_4, SIZE_3, SIZE_2, SIZE_1 } from 'config'

injectGlobal`
  *,*:after,*:before {
    box-sizing:inherit;
  }

  html {
    box-sizing:border-box;
    font-size:62.5%
  }


  body {
    display: flex;
    color: #323232;
    background-color: #FCFCFC;
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
    color: #000;
    text-decoration: none;
    background-color: transparent;
    cursor: pointer;
  }
`

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    )
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <html>
        <Head>
          <title>Franck Achkouyan</title>
          <link rel="icon" type="image/png" href="/static/favico.png" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Fira+Mono:400,700"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
          />

          <meta name="author" content="Franck Achkouyan" />
          <meta
            name="description"
            content="Franck Achkouyan's Personal Card - Achkouyan Consulting"
          />
          <meta
            name="keywords"
            content="developer,personal,about,blog,javascript,fullstack,nextjs"
          />
          <meta
            name="google-site-verification"
            content="FUbld5Ru23u5T6BOpqQn_wG6l8J_dUunaohq5ZN9Qw4"
          />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
