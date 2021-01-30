import sanityClient from '@sanity/client';
import sanityImage from '@sanity/image-url';
import { __DEV__ } from '@lib/utils/assertion';

const options = {
  dataset: 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: !__DEV__,
};

const client = sanityClient(options);

export const imageBuilder = sanityImage(client);

export const previewClient = sanityClient({
  ...options,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

export default client;
