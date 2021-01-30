import client, { previewClient } from 'sanity';
import { IBio, IHero, IStudycase } from './api.types';
import { studycaseFields } from './constants';

/**
 * Function that returns `previewClient` if preview is set to `true` or `client` if it's set to `false`
 * @param {boolean} preview Sanity client is in preview mode or not
 */
const getClient = (preview: boolean) => (preview ? previewClient : client);

/**
 * Function that returns an object with all the data for the homepage
 * @param {boolean} preview Sanity client is in preview mode or not
 */
export async function getAllDataForHome(
  preview: boolean
): Promise<{ studycase: IStudycase; bio: IBio; hero: IHero }> {
  const currentClient = getClient(preview);

  const [studycase, bio, hero] = await Promise.all([
    currentClient.fetch(`*[ _type == "studycase"] | order(date desc, _updatedAt desc){
      ${studycaseFields}
    }`),
    currentClient.fetch('*[ _type == "bio" ]'),
    currentClient.fetch('*[ _type == "hero" ]'),
  ]);

  return { studycase, bio, hero };
}

/** Functions that gets all the studycases as an `array` of objects. Returns a promise */
export async function getAllStudycasesWithSlug(): Promise<
  Array<{ slug: string }>
> {
  const data = await client.fetch(
    `*[_type == "studycase"]{ 'slug': slug.current }`
  );

  return data;
}

/**
 * A function that returns an object containing all the studycase data, queried by the `slug`
 * @param {string} slug Studycase slug in order to make the query by it
 * @param {boolean} preview Sanity client is in preview mode or not
 */
export async function getStudycaseBySlug(
  slug: string | string[] | undefined,
  preview: boolean
) {
  const studycase = getClient(preview)
    .fetch(
      `*[_type == "studycase" && slug.current == '${slug}' ] | order(_updatedAt desc) {
    ${studycaseFields}
  }`
    )
    .then((res) => res?.[0]);

  return studycase;
}

export async function getNavigationData() {
  const navigation = await client.fetch(`*[ _type == 'nav' ] | order(date desc, _updatedAt desc) {
    label,
    'path': path.current
  }`);

  return navigation;
}
