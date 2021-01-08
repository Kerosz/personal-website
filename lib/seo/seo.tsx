import { FC } from 'react';
import { SeoArgs } from './seo.types';
import Head from 'next/head';
import generateMeta from './generate-meta';

/**
 * This component generates default `SEO` tags and injects them into the `<head>`, needs a configuration object (see below example).
 * @param {string} [title] - The title of the website.
 * @param {string} [titleTemplate="hi"] - The template that will be used for the website title.
 * @param {string} [description] - The website description.
 * @param {string} [canonical] - Sets url as master copy of a page
 * @param {boolean} [noindex=false] - Prevent a page from appearing in searches
 * @param {boolean} [nofollow=false] - Sets hyperlinks that directs search engines not to use it for rankings
 * @param {object} [twitter] - Renders twitter information tags
 * @param {Array} [extraMeta] - Add extra meta tags to be rendered
 *
 * @example
 * jsx```
 *    const config = {
 *       "title": "Site title",
 *       "titleTemplate": "%s - Template",
 *       "description": "My site description",
 *    }
 *
 *    <SEO {...config} />
 * ```
 */
const SEO: FC<SeoArgs> = (args): JSX.Element => {
  return (
    <Head>
      {generateMeta({
        ...args,
      }).map((tag) => tag)}
    </Head>
  );
};

export default SEO;
