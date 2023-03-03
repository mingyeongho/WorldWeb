import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>세계웹</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
