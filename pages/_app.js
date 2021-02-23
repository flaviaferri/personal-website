import "../styles/globals.css";
import Head from "next/head";

import "reset-css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Flavia Ferri - Frontend Developer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
