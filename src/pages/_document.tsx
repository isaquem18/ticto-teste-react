import { Html, Head, NextScript, Main } from 'next/document';

export default function MyDocument () {

  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Roboto&display=swap" rel="stylesheet"></link>
      </Head>
      <NextScript />
      <Main />
    </Html>
  )
}

