export default {
  name: 'contentBlock',
  title: 'Cotennt',
  type: 'document',
  fields: [
    {
      name: 'contentText',
      title: 'Content',
      type: 'string',
    },
  ],

  preview: {
    select: {
      subtitle: 'contentText',
    },
  },
};
