import Document, { Head, Html, Main, NextScript } from "next/document"
import { ServerStyleSheet } from "styled-components"

const THEMES = { DARK: "dark", LIGHT: "light" }

const COLOR_DARK = "#323232"
const COLOR_LIGHT = "#FCFCFC"

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(
      (App) => (props) => sheet.collectStyles(<App {...props} />)
    )
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    const theme = THEMES.DARK

    return (
      <Html lang="en">
        <Head>
          <link rel="icon" type="image/png" href="/static/favico.png" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Fira+Mono:400,700"
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
          <script async src="https://ping.traffi.cz/hi.js" />
          <noscript>
            <div style={{ position: "absolute", top: "33%", left: "10px" }}>
              I'm sorry I haven't taken care of the render without javascript :(
            </div>
            <img src="https://ping.traffi.cz/ping.gif" alt="" />
          </noscript>
        </body>
      </Html>
    )
  }
}
