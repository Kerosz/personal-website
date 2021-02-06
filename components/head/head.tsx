// No check needed for link onload property to work
// @ts-nocheck
import SEO from '@lib/seo';
import NextHead from 'next/head';
import config from 'seo.config.json';

const Head = () => {
  return (
    <>
      <SEO {...config} />
      <NextHead>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta rel='shortcut icon' content='/favicon.ico' />
        <link rel='manifest' href='manifest.webmanifest' />
        <meta rel='application-name' content='Chirila Andrei Portfolio' />
        <meta
          rel='apple-mobile-web-app-title'
          content='Chirila Andrei Portfolio'
        />

        <meta name='theme-color' content='#171923' />
        <meta name='msapplication-TileColor' content='#171923' />
        <meta name='msapplication-starturl' content='/' />
        <meta name='msapplication-config' content='/browserconfig.xml' />
        <meta rel='mobile-web-app-capable' content='yes' />
        <meta rel='apple-mobile-web-app-capable' content='yes' />
        <meta
          rel='mask-icon'
          content='/images/safari-pinned-tab.svg'
          color='#171923'
        />
        <meta
          rel='apple-touch-icon'
          href='images/apple-touch-icon.png'
          sizes='76x76'
        />
        <meta
          rel='icon'
          href='images/favicon-32x32.png'
          sizes='32x32'
          type='icon'
        />
        <meta
          rel='icon'
          href='images/favicon-16x16.png'
          sizes='16x16'
          type='icon'
        />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          rel='preload'
          as='style'
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap'
          onload="this.rel='stylesheet'"
        />
        <link
          rel='preload'
          as='style'
          href='https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap'
          onload="this.rel='stylesheet'"
        />
      </NextHead>
    </>
  );
};

export default Head;
