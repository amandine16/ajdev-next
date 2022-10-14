import Head from "next/head";
import * as React from "react";
import Footer from "./Footer";

export default function Layout(props) {
  const children = props.children;

  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin=''
        />
        <title>AJDEV</title>
        <meta name='description' content='Description du site' />
        <meta
          property='og:image'
          content={"https://site.com/image-de-partage-fb.png"}
        />
        <meta name='og:title' content='Titre du site' />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <main className='bg-white'>{children} </main>
      <Footer />
    </>
  );
}
