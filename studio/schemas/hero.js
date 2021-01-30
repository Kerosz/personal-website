export default {
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    {
      name: 'html',
      title: 'Text content',
      description: 'The text content for the hero',
      type: 'string',
    },
    {
      name: 'align',
      title: 'Content position',
      description:
        'Position of the content to be displayed on the page ( left or right )',
      type: 'string',
    },
  ],
};
