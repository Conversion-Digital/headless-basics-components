
import { defineField, defineType } from 'sanity'
import { EyeOpenIcon } from '@sanity/icons'

export default defineType({
  name: 'frame469',
  title: 'Frame 469 (Contact Info + CTA)',
  type: 'object',
  icon: EyeOpenIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'fax',
      title: 'Fax Number',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'officeLocation',
      title: 'Office Location',
      type: 'string',
    }),
    defineField({
      name: 'bookButtonLabel',
      title: 'Book Button Label',
      type: 'string',
    }),
    defineField({
      name: 'bookButtonLink',
      title: 'Book Button Link',
      type: 'url',
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
          { title: 'Default', value: 'default' },
          { title: 'Demo', value: 'demo' },
        ]
      }
    }),
    defineField({
      name: 'globalComponentSource',
      title: 'Global Component Source',
      type: 'reference',
      to: [{ type: 'frame469' }],
      description: 'Select a frame469 that is a global reusable source.'
    })
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
})
