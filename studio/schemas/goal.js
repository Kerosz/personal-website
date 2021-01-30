export default {
  name: 'goal',
  title: 'Goal',
  type: 'document',
  fields: [
    {
      name: 'project',
      title: 'Project',
      description: 'The project that the goal applies to',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      description: 'The goal content',
      type: 'string',
    },
  ],

  preview: {
    select: {
      title: 'project',
      subtitle: 'content',
    },
  },
};
