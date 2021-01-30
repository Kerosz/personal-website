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
