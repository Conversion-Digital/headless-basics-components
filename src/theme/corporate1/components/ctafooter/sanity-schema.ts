import { defineField, defineType } from 'sanity'
import { EyeOpenIcon } from '@sanity/icons'

export default defineType({
  name: 'ctafooter',
  title: 'CTA Footer',
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
          { title: 'xDemo', value: 'xDemo' }
        ]
      }
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number'
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'Main heading text'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Small paragraph for CTA details'
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string'
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string'
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string'
    }),
    defineField({
      name: 'ctaLabel',
      title: 'CTA Label',
      type: 'string'
    }),
    defineField({
      name: 'ctaLink',
      title: 'CTA Link',
      type: 'url'
    }),
    defineField({
      name: 'globalComponentSource',
      title: 'Global Component Source',
      type: 'reference',
      to: [{type: 'ctafooter'}],
      description: 'Select a CTA footer that is a global reusable source.'
    })
  ],
  preview: {
    select: {
      title: 'heading'
    }
  }
})