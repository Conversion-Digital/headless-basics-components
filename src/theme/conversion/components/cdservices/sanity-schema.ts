import { defineField, defineType } from 'sanity'
import { EyeOpenIcon } from '@sanity/icons'

export const serviceItem = defineType({
    name: 'serviceItem',
    title: 'Service Item',
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
  name: 'cdservices',
  title: 'Services (CD)',
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
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
      description: 'Order of the component when displayed on a page.'
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Main title for this Services section.'
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Secondary descriptive text for this Services section.'
    }),
    defineField({
      name: 'image',
      title: 'Optional Image',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'servicesList',
      title: 'Services List',
      type: 'array',
      of: [{ type: 'serviceItem' }]
    }),
    defineField({
      name: 'globalComponentSource',
      title: 'Global Component Source',
      type: 'reference',
      to: [{ type: 'cdservices' }],
      description: 'Select a global re-usable cdservices component if desired.'
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle'
    }
  }
})