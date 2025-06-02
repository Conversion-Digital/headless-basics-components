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
      name: 'url',
      title: 'Partner Website URL',
      type: 'url'
    }),
    defineField({
      name: 'logo',
      title: 'Partner Logo',
      type: 'image'
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
        ]
      }
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string'
    }),
    defineField({
      name: 'partnerLogos',
      title: 'Partner Logos',
      type: 'array',
      of: [{ type: 'partnerItem' }]
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
      to: [{ type: 'cdpartners' }]
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle'
    }
  }
});