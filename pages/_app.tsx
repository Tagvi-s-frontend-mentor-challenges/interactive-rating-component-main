import "@styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className="app">
      <Head>
        <title>Interactive Rating Component</title>
      </Head>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
