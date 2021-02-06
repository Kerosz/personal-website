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
