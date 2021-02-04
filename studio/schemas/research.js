export default {
  name: 'research',
  title: 'Research Case',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'The title for the document',
      type: 'string',
    },
    {
      name: 'listItem',
      title: 'Research list items',
      description: 'A list of items for the overview of the research',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'goal' } }],
    },
    {
      name: 'paragraph',
      title: 'Research paragraph list',
      description:
        'A list of paragraphs for the explenation of the overview points',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'goal' } }],
    },
  ],
};
