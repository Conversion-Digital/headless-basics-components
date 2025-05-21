import { defineField, defineType } from 'sanity'
import { EyeOpenIcon } from '@sanity/icons'

export const insightsItem = defineType({
  name: 'insightsItem',
  title: 'Insights Item',
  type: 'object',
  fields: [
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
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url'
    })
  ]
})

export default defineType({
  name: 'cdinsights',
  title: 'Insights (CD)',
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
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'Main heading for the insights section.'
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Subtitle or tagline for the insights section.'
    }),
    defineField({
      name: 'items',
      title: 'Insights Items',
      type: 'array',
      of: [{ type: 'insightsItem' }]
    }),
    defineField({
      name: 'globalComponentSource',
      title: 'Global Component Source',
      type: 'reference',
      to: [{ type: 'cdinsights' }],
      description: 'Select a global re-usable cdinsights component if desired.'
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'tagline'
    }
  }
})