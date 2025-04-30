import { defineField, defineType } from 'sanity'
import { EyeOpenIcon } from '@sanity/icons'

export default defineType({
  name: 'cdfooter',
  title: 'Footer (CD)',
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
      title: 'Footer Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'additionalInformation',
      title: 'Additional Information',
      type: 'additionalInformation'
    }),
    defineField({
      name: 'logo',
      title: 'Primary Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'secondaryLogo',
      title: 'Secondary Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [{ type: 'socialLink' }]
    }),
    defineField({
      name: 'linkGroups',
      title: 'Link Groups',
      type: 'array',
      of: [{ 
        type: 'linkGroup',
      }]
    }),
    defineField({
      name: 'copyrightMessage',
      title: 'Copyright Message',
      type: 'string',
      description: 'Enter the copyright message to display in the footer'
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
      to: [{ type: 'cdfooter' }],
      description: 'Select a global re-usable cdfooter.'
    })
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
})