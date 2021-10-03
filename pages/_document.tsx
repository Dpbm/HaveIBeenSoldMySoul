import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps({renderPage}:any) {
	  const sheet = new ServerStyleSheet();

    const page = renderPage((App : any) => (props:any) =>
      sheet.collectStyles(<App {...props} />),
    );

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Have I been sold my soul?</title>
          {this.props.styleTags}
        </Head>
        <body>
        	<Main />
        	<NextScript />
        </body>
      </Html>
    );
  }
}

