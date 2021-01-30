export default {
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    {
      name: 'content',
      title: 'Content',
      description: 'The content for the contact section',
      type: 'text',
    },
    {
      name: 'email',
      title: 'Email Address',
      description:
        'The email address that will be displayed in the contact section',
      type: 'string',
    },
  ],

  preview: {
    select: {
      title: 'email',
      subtitle: 'content',
    },
  },
};
