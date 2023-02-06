import Head from "next/head";
import Script from "next/script";
import { useState } from "react"
import Footer from "./Footer";
import Header from "./Header"
import CookieConsent, { Cookies, getCookieConsentValue } from "react-cookie-consent";
import Link from "next/link";

export default function Layout(props) {
  const children = props.children;
  const [cookieIsAccepted, setCookieIsAccepted] = useState(false)
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

      {
        cookieIsAccepted &&
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-BRHWM9GCR5"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){window.dataLayer.push(arguments);}
                    gtag("js", new Date());
					
                    gtag("config", "G-BRHWM9GCR5");
                    `}
          </Script>
        </>

      }
      {!getCookieConsentValue() &&
        <CookieConsent enableDeclineButton flipButtons
          location="bottom"
          onDecline={() => {
            setCookieIsAccepted(false)
          }}
          onAccept={(acceptedByScrolling) => {
            if (acceptedByScrolling) {
              // triggered if user scrolls past threshold
              setCookieIsAccepted(true)
            } else {
              setCookieIsAccepted(true)
            }
          }}
          buttonText="Accepter"
          declineButtonText="Refuser"
          style={{ background: "#694BC4", alignItems: "center", fontSize: "13px" }}
          buttonStyle={{ background: "white", color: "black", fontSize: "15px", borderRadius: "5px" }}
          declineButtonStyle={{ background: "black", color: "white", fontSize: "15px", borderRadius: "5px" }}
          expires={150}
          debug={true}>
          Nous utilisons des cookies pour vous offrir la meilleure expérience sur notre site. Vous pouvez en savoir plus sur les cookies que nous utilisons ou les désactiver.
          <Link href="/privacy-policy">
            <a className="underline ml-1 cursor-pointer">
              En savoir plus
            </a>
          </Link>
        </CookieConsent>
      }


      <Header />
      <main className='bg-white'>{children} </main>
      <Footer />
    </>
  );
}
