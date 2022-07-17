import GlobalStyle from "styles/globalStyles";
import Head from "next/head";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Produtos Box</title>
        <link rel="shortcut icon" href="favicon.ico" />
        <link rel="apple-touch-icon" href="" />
        <meta name="description" content="Produtos box" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
