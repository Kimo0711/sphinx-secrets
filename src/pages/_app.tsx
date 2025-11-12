// src/pages/_app.tsx
import '../styles/globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Head from 'next/head';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Sphinx Secrets — Discover the mysteries of Egypt with expert-guided tours and unforgettable experiences." />
        <title>Sphinx Secrets | Expert Egypt Tours & Travel Experiences</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
