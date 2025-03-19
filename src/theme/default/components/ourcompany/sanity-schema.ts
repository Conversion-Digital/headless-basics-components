import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'ourcompany',
  title: 'Our Company',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
    }),
    defineField({
      name: 'subTitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'facts',
      title: 'Facts List',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of key facts or bullet points'
    }),
    defineField({
      name: 'learnMoreUrl',
      title: 'Learn More URL',
      type: 'url',
    }),
    defineField({
      name: 'learnMoreLabel',
      title: 'Learn More Label',
      type: 'string',
      initialValue: 'LEARN more',
    }),
    defineField({
      name: 'media',
      title: 'Media',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'selectableVariant',
      title: 'Selectable Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Default', value: 'default' }
        ]
      }
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number'
    }),
    defineField({
      name: 'globalComponentSource',
      title: 'Global Reference (Optional)',
      type: 'reference',
      to: [{ type: 'ourcompany' }],
      description: 'Select a global reference if you want this repeated in multiple places.'
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'selectableVariant'
    }
  }
});