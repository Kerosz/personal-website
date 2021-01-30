import client, { previewClient } from 'sanity';
import { IBio, IHero, IStudycase, IContact, INavigation } from './api.types';
import {
  allStudycaseQuery,
  allBioQuery,
  contactQuery,
  allHeroQuery,
  studycaseBySlugQuery,
  allNavigationQuery,
  studycaseWithSlugQuery,
} from './constants';

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
): Promise<{
  studycase: IStudycase[];
  bio: IBio[];
  hero: IHero[];
  contact: IContact;
}> {
  const currentClient = getClient(preview);

  const [studycase, bio, hero, contact] = await Promise.all([
    currentClient.fetch(allStudycaseQuery),
    currentClient.fetch(allBioQuery),
    currentClient.fetch(allHeroQuery),
    currentClient.fetch(contactQuery).then((res) => res?.[0]),
  ]);

  return { studycase, bio, hero, contact };
}

/** Functions that gets all the studycases as an `array` of objects. Returns a promise */
export async function getAllStudycasesWithSlug(): Promise<
  Array<{ slug: string }>
> {
  const data = await client.fetch(studycaseWithSlugQuery);

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
): Promise<IStudycase> {
  const studycase = getClient(preview)
    .fetch(studycaseBySlugQuery, { slug })
    .then((res) => res?.[0]);

  return studycase;
}

/** Function that queries a list of navigation items. Returns a promise */
export async function getNavigationData(): Promise<INavigation[]> {
  const navigation: INavigation[] = await client.fetch(allNavigationQuery);

  return navigation;
}
