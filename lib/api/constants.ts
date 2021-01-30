export const studycaseFields = `
  _id,
  name,
  "slug": slug.current,
  excerpt,
  scheme,
  align,
  "src": src.asset->url,
  "tags": tags[]->title,
  "goals": goals[]->content
`;

export const contactFields = `
  _id,
  content,
  email
`;

export const allStudycaseQuery = `*[ _type == "studycase"] | order(date desc, _updatedAt desc){
  ${studycaseFields}
}`;

export const studycaseBySlugQuery = `*[_type == "studycase" && slug.current == $slug ] | order(_updatedAt desc) {
  ${studycaseFields}
}`;

export const studycaseWithSlugQuery = `*[_type == "studycase"]{ 'slug': slug.current }`;

export const allBioQuery =
  '*[ _type == "bio" ] | order(date desc, _updatedAt desc)';

export const allHeroQuery =
  '*[ _type == "hero" ] | order(date desc, _updatedAt desc)';

export const contactQuery = `*[ _type == "contact" ] | order(date desc, _updatedAt desc){
    ${contactFields}
  }`;

export const allNavigationQuery = `*[ _type == 'nav' ] | order(date desc, _updatedAt desc) {
    label,
    'path': path.current
  }`;
