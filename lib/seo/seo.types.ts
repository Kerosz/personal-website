export interface SeoArgs {
  title?: string;
  titleTemplate?: string;
  noindex?: boolean;
  nofollow?: boolean;
  description?: string;
  canonical?: string;
  twitter?: Twitter;
  extraMeta?: ReadonlyArray<MetaTag>;
}

interface BaseMetaTag {
  content: string;
}

interface MetaTag extends BaseMetaTag {
  name: string;
  property?: any;
}

type Twitter = {
  handle?: string;
  site?: string;
  cardType?: string;
};
