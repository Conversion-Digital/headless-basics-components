import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'headerComponet', 
  title: 'Header', 
  type: 'object', 
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The main title of the header',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'The subtitle of the header',
    }),
    defineField({
      name: 'className',
      title: 'Class Name',
      type: 'string',
      description: 'CSS class for styling the header',
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      options: {
        list: [
          { title: 'gray', value: 'bg-gray-500' },
          { title: 'blue', value: 'bg-blue-500' },
          { title: 'green', value: 'bg-green-500' },
        ],
      },
      description: 'Background color for the header',
    }),
    defineField({
      name: 'isSticky',
      title: 'Sticky Header',
      type: 'boolean',
      description: 'Whether the header should stick to the top of the page',
    }),
  ],
});
