import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, injectGlobal } from 'styled-components'
import { SIZE_4, SIZE_3, SIZE_2, SIZE_1 } from 'config'

const THEMES = { DARK: 'dark', LIGHT: 'light' }

const COLOR_DARK = '#323232'
const COLOR_LIGHT = '#FCFCFC'

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
    const theme = Math.floor(Math.random() * 2) ? THEMES.DARK : THEMES.LIGHT

    return (
      <html>
        <Head>
          <title>Franck Achkouyan | Fullstack JS Developer</title>
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
          {this.props.styleTags}
        </Head>
        <body
          style={{
            backgroundColor: theme === THEMES.DARK ? COLOR_DARK : COLOR_LIGHT,
            color: theme === THEMES.DARK ? COLOR_LIGHT : COLOR_DARK,
          }}
        >
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
