import { SeoArgs } from './types';

const defaultArgs = {
  title: 'Page',
  noindex: false,
  nofollow: false,
};

const generateMeta = (args: SeoArgs) => {
  const metaTagsToRender = [];

  const noindex = args.noindex || defaultArgs.noindex;
  const nofollow = args.nofollow || defaultArgs.nofollow;

  let title: string;
  if (args.title) {
    title = args.title;

    if (args.titleTemplate) {
      title = args.titleTemplate.replace(/%s/g, () => title);
    }

    metaTagsToRender.push(<title key='title'>{title}</title>);
  }

  if (args.description) {
    metaTagsToRender.push(
      <meta key='description' name='description' content={args.description} />
    );
  }

  if (args.canonical) {
    metaTagsToRender.push(
      <link rel='canonical' href={args.canonical} key='canonical' />
    );
  }

  if (args.twitter) {
    if (args.twitter.cardType) {
      metaTagsToRender.push(
        <meta
          key='twitter:card'
          name='twitter:card'
          content={args.twitter.cardType}
        />
      );
    }

    if (args.twitter.site) {
      metaTagsToRender.push(
        <meta
          key='twitter:site'
          name='twitter:site'
          content={args.twitter.site}
        />
      );
    }

    if (args.twitter.handle) {
      metaTagsToRender.push(
        <meta
          key='twitter:creator'
          name='twitter:creator'
          content={args.twitter.handle}
        />
      );
    }
  }

  if (noindex || nofollow) {
    metaTagsToRender.push(
      <meta
        key='robots'
        name='robots'
        content={`${noindex ? 'noindex' : 'index'}, ${
          nofollow ? 'nofollow' : 'follow'
        }`}
      />
    );
    metaTagsToRender.push(
      <meta
        key='googlebot'
        name='googlebot'
        content={`${noindex ? 'noindex' : 'index'},${
          nofollow ? 'nofollow' : 'follow'
        }`}
      />
    );
  } else {
    metaTagsToRender.push(
      <meta key='robots' name='robots' content='index,follow' />
    );
    metaTagsToRender.push(
      <meta key='googlebot' name='googlebot' content='index,follow' />
    );
  }

  if (args.extraMeta && args.extraMeta.length > 0) {
    args.extraMeta.forEach((t) => {
      metaTagsToRender.push(<meta key={t.name ? t.name : t.property} {...t} />);
    });
  }

  return metaTagsToRender;
};

export default generateMeta;
