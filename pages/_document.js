import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

const THEMES = { DARK: 'dark', LIGHT: 'light' };

const COLOR_DARK = '#323232';
const COLOR_LIGHT = '#FCFCFC';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />),
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    const theme = Math.floor(Math.random() * 2) ? THEMES.DARK : THEMES.LIGHT;

    return (
      <html lang="en">
        <Head>
          <link rel="icon" type="image/png" href="/static/favico.png" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Fira+Mono:400,700"
          />
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
          <script async src="https://ping.achkouyan.com/hi.js" />
          <noscript>
            <div style={{ position: 'absolute', top: '33%', left: '10px' }}>
              I'm sorry I haven't taken care of the render without javascript :(
            </div>
            <img src="https://ping.achkouyan.com/ping.gif" alt="" />
          </noscript>
        </body>
      </html>
    );
  }
}
