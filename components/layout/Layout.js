
import * as React from "react"
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import CallWe from "./CallWe";




export default function Layout(props) {
    const children = props.children

    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <title>Titre du site</title>
                <meta name="description" content="Description du site" />
                <meta property="og:image" content={"https://site.com/image-de-partage-fb.png"} />
                <meta name="og:title" content="Titre du site" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            <Header />

            <main className="bg-white">{children}     </main>


            <Footer />
        </>
    )
}