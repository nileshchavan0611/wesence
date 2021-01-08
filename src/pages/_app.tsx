import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import Header from '../components/header';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className="main">
      <Head>
        <meta content="ie=edge" httpEquiv="x-ua-compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <title>Wesence</title>
        <link rel="icon" type="image/png" href="/images/favicon.png" />
        <meta name="theme-color" content="#A82929" />
        <meta name="msapplication-navbutton-color" content="#A82929" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#A82929" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
