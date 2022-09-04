import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="İcon" href="/favicon.ico" />
      </Head>
      <Header />
      <h1>Blog Page</h1>;
    </>
  );
}