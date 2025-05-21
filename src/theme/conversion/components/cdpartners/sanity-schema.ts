import { defineField, defineType } from 'sanity'
import { EyeOpenIcon } from '@sanity/icons'

export const partnerItem = defineType({
  name: 'partnerItem',
  title: 'Partner Item',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Partner Name',
      type: 'string'
    }),
    defineField({
      name: 'logo',
      title: 'Partner Logo',
      type: 'image',
      options: {
        hotspot: true
      }
    })
  ]
})

export default defineType({
  name: 'cdpartners',
  title: 'Partners (CD)',
  type: 'object',
  icon: EyeOpenIcon,
  fields: [
    defineField({
      name: 'selectableVariant',
      title: 'Selectable Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Default', value: 'default' },
          { title: 'Demo', value: 'xDemo' },
        ],
      },
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
      description: 'Order of the component when displayed on a page.'
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Main heading for the partners section.'
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Subtitle or tagline for the partners section.'
    }),
    defineField({
      name: 'partnerLogos',
      title: 'Partner Logos',
      type: 'array',
      of: [{ type: 'partnerItem' }]
    }),
    defineField({
      name: 'globalComponentSource',
      title: 'Global Component Source',
      type: 'reference',
      to: [{ type: 'cdpartners' }],
      description: 'Select a global re-usable cdpartners component if desired.'
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle'
    }
  }
});