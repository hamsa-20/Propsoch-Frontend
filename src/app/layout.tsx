'use client'
import "../styles/index.scss";
import { Provider } from "react-redux";
import store from "@/redux/store";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const isDev = process.env.NODE_ENV === 'development'

  return (
    <html lang="en" suppressHydrationWarning={isDev}>
      <head>
        <meta name="keywords" content="Real estate Bangalore, Buy property Bangalore, Sell property Bangalore, Flats in Bangalore, Apartments in Bangalore, Real estate Mumbai, Buy property Mumbai" />
<meta name="description" content="Propsoch is a trusted real estate platform to search, buy, and sell properties in Bangalore and Mumbai." />

<meta property="og:site_name" content="Propsoch" />
<meta property="og:url" content="https://propsoch.com" />
<meta property="og:type" content="website" />
<meta property="og:title" content="Propsoch | Real Estate in Bangalore & Mumbai – Buy, Sell & Rent Properties" />
<meta property="og:description" content="Discover verified properties in Bangalore and Mumbai. Buy, sell, or rent homes easily with Propsoch." />
<meta property="og:image" content="/images/assets/og-image.png" />

        {/* For IE  */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {/* For Resposive Device */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* For Window Tab Color */}
        {/* Chrome, Firefox OS and Opera */}
        <meta name="theme-color" content="#0D1A1C" />
        {/* Windows Phone */}
        <meta name="msapplication-navbutton-color" content="#0D1A1C" />
        {/* iOS Safari */}
        <meta name="apple-mobile-web-app-status-bar-style" content="#0D1A1C" />
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,500&display=swap" />
      </head>
      <body suppressHydrationWarning={true}>
        <div className="main-page-wrapper">
          <Provider store={store}>
            {children}
          </Provider>
        </div>
      </body>
    </html>
  )
}
