import SEO from '@lib/seo';
import NextHead from 'next/head';
import config from '@constants/seo.config.json';

const Head = () => {
  return (
    <>
      <SEO {...config} />
      <NextHead>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </NextHead>
    </>
  );
};

export default Head;
