import App from "next/app";
import Head from "next/head";
import Layout from "../components/Layout";
import { getCategories } from "../utils/api";

import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import "../styles/Home.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout categories={pageProps.categories}>
      <Head>
        <title>Kappa Books</title>

        <meta
          name="description"
          content="A library of interactive books for ESL"
        />

        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa&family=Montserrat:wght@500&family=Mulish:wght@200;300;400&display=swap"
          rel="stylesheet" />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
};

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So [[...slug]] pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const categories = await getCategories();
  // Pass the data to our page via props
  return { ...appProps, pageProps: { categories, path: ctx.pathname } };
};

export default MyApp;
