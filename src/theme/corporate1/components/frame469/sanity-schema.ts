
import { defineField, defineType } from 'sanity'
import { EyeOpenIcon } from '@sanity/icons'

export default defineType({
  name: 'frame469',
  title: 'Frame 469',
  type: 'object',
  icon: EyeOpenIcon,
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string'
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text'
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
      name: 'phone',
      title: 'Phone',
      type: 'string'
    }),
    defineField({
      name: 'fax',
      title: 'Fax',
      type: 'string'
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string'
    }),
    defineField({
      name: 'officeLocation',
      title: 'Office Location',
      type: 'string'
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
          { title: 'Demo', value: 'xDemo' }
        ]
      }
    }),
    defineField({
      name: 'globalComponentSource',
      title: 'Global Component Source',
      type: 'reference',
      to: [{ type: 'frame469' }],
      description: 'Select a global reusable source for the Frame 469 component.'
    })
  ],
  preview: {
    select: {
      title: 'heading'
    }
  }
})
