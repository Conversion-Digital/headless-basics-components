import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'carousel',
  title: 'Carousel',
  type: 'object',
  fields: [
    defineField({
      name: 'selectableVariant',
      title: 'Selectable Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Default', value: 'default' }
          // Add additional variants here if needed
        ]
      }
    }),
    // Other carousel-specific fields
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image' }]
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number'
    }),
    defineField({
      name: 'globalComponentSource',
      title: 'Global Component Source',
      type: 'reference',
      to: [{ type: 'carousel' }],
      description: 'Select an optional global reference to store re-usable content.'
    })
  ],
  preview: {
    select: {
      title: 'selectableVariant'
    }
  }
})