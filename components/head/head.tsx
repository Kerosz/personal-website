import SEO from '@lib/seo';
import NextHead from 'next/head';
import config from '@constants/seo.config.json';

const Head = () => {
  return (
    <>
      <SEO {...config} />
      <NextHead>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap'
          rel='stylesheet'
        />
      </NextHead>
    </>
  );
};

export default Head;
