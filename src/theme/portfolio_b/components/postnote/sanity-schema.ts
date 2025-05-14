import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'postnote',
  title: 'Post Note',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the note.',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'string',
      description: 'The date displayed on the note.',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      description: 'The description content of the note.',
    }),
    defineField({
      name: 'drawOutlineTime',
      title: 'Outline Animation Time',
      type: 'number',
      description: 'Time in seconds for the outline animation to complete.',
    }),
    defineField({
      name: 'fadeInTime',
      title: 'Fade-in Animation Time',
      type: 'number',
      description: 'Time in seconds for the fade-in animation to complete.',
    }),
    defineField({
      name: 'animationDelay',
      title: 'Animation Delay',
      type: 'number',
      description: 'Delay in seconds before animations start.',
    }),
    defineField({
      name: 'width',
      title: 'Width',
      type: 'number',
      description: 'Width of the note container.',
    }),
    defineField({
      name: 'height',
      title: 'Height',
      type: 'number',
      description: 'Height of the note container.',
    }),
    defineField({
      name: 'globalComponentSource',
      title: 'Global Component Source',
      type: 'reference',
      to: [{type: 'hero'}],
      description: 'Select a component hero that is a global reusable source.'
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number'
    }),
    defineField({
      name: 'selectableVariant',
      title: 'Selectable Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Default', value: 'Default' },
        ]
      }
    }),
  ],
});
