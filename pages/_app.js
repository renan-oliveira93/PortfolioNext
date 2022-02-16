import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="description" content="Portfólio de Renan de Oliveira - Desenvolvedor Front-End"/>
        <meta http-Equiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
            <Component {...pageProps} />
    </>   
  )
   
}

export default MyApp
