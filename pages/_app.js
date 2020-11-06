import React, { Fragment, useEffect } from 'react';
import { Navigation } from '../containers';
import GlobalStyle from '../styles/Globals';
import Head from 'next/head';
import GoogleFonts from 'next-google-fonts';
import {
  DefaultSeo,
  SocialProfileJsonLd,
  LogoJsonLd,
  BreadcrumbJsonLd
} from 'next-seo';
import SEO from '../next-seo.config';
import PropTypes from 'prop-types';

function App({ Component, pageProps }) {
  //
  const HandleKeyTab = (e) => {
    const Class = 'user-is-tabbing';
    const ClassExist = document.body.classList.contains(Class);
    if (e.keyCode === 9 && e.key === 'Tab') {
      document.body.classList.add(Class);
      // window.removeEventListener('keydown', HandleKeyTab);
    } else {
      if (ClassExist) document.body.classList.remove(Class);
    }
  };

  useEffect(() => {
    document.documentElement.lang = 'en';
    window.addEventListener('keydown', HandleKeyTab);
  }, []);

  return (
    <Fragment>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" />
      {/* font-family: 'Roboto', sans-serif; */}
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap" />
      {/* font-family: 'Oswald', sans-serif; */}

      <GlobalStyle />
      <DefaultSeo {...SEO} />
      <LogoJsonLd
        logo="http://www.devrev-morocco.vercel.app/static/images/devrev-logo_112x112.webp"
        url="http://www.devrev-morocco.vercel.app"
      />
      <SocialProfileJsonLd
        type="WebPage"
        name="DevRev Morocco"
        url="http://www.devrev-morocco.vercel.app"
        sameAs={[
          'https://www.facebook.com/devrevmorocco/',
          'https://www.youtube.com/channel/UCohUHFN_a54IJz2qVSEgf4g',
          'https://www.instagram.com/devrevmorocco/',
          'https://twitter.com/devrevmorocco',
          'https://twitch.com/devrevmorocco',
          'http://www.linkedin.com/in/yourprofile',
          'http://plus.google.com/your_profile'
        ]}
      />
      {/* <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'DevRev-Morocco',
            item: 'http://www.devrev-morocco.vercel.app',
          },
          {
            position: 2,
            name: 'Season',
            item: 'http://www.devrev-morocco.vercel.app/season',
          },
          {
            position: 3,
            name: 'Season 1',
            item: 'http://www.devrev-morocco.vercel.app/season?s=1',
          },
          {
            position: 4,
            name: 'Episode 1',
            item: 'http://www.devrev-morocco.vercel.app/season?s=1&ep=1&vid=qxu1bku4wN0',
          }
        ]}
      /> */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link
          rel="mask-icon"
          href="/static/favicons/safari-pinned-tab.svg"
          color="#2f2f2f"
        />
        <meta name="msapplication-TileColor" content="#2f2f2f" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Navigation />
      <Component {...pageProps} />
    </Fragment>
  );
}

App.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object
};

const FixNum = (num) => Number((num / 1000).toFixed(6));

export function reportWebVitals(metric) {
  switch (metric.name) {
    case 'FCP':
      console.log('First Contentful Paint (s): ', FixNum(metric.startTime));
      break;
    case 'LCP':
      console.log('Largest Contentful Paint (s): ', FixNum(metric.startTime));
      break;
    case 'CLS':
      console.log('Cumulative Layout Shift (s): ', FixNum(metric.startTime));
      break;
    case 'FID':
      console.log('First Input Delay (s): ', FixNum(metric.startTime));
      break;
    case 'TTFB':
      console.log('Time to First Byte (s): ', FixNum(metric.startTime));
      break;
    case 'Next.js-hydration':
      console.log('Next.js hydration (s): ', FixNum(metric.startTime));
      break;
    default:
      console.log(`${metric.name} (S)`, FixNum(metric.startTime));
      break;
  }
}

export default App;
