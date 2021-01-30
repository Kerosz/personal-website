export default {
  name: 'nav',
  title: 'Navigation',
  type: 'document',
  fields: [
    {
      name: 'label',
      title: 'Label',
      description: 'Navigation link label',
      type: 'string',
    },
    {
      name: 'path',
      title: 'Path',
      description: 'Navigation link path',
      type: 'slug',
      options: {
        source: 'label',
        maxLength: 52,
      },
    },
  ],
};
