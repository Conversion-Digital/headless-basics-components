import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'callToActionCard1',
  title: 'Call To Action Card 1',
  type: 'object',
  fields: [
    defineField({
      name: 'selectableVariant',
      title: 'Selectable Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Default', value: 'default' },
          { title: 'callToActionCard1Demo', value: 'callToActionCard1Demo' }
        ]
      }
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text'
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number'
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'globalComponentSource',
      title: 'Global Component Source',
      type: 'reference',
      to: [{ type: 'callToActionCard1' }],
      description: 'Select an optional global reference to store re-usable content.'
    })
  ],
})