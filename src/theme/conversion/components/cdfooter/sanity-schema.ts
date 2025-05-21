import { defineField, defineType, defineArrayMember } from 'sanity'
import { EyeOpenIcon } from '@sanity/icons'

// Define the socialLink type
export const socialLink = defineType({
  name: 'socialLink',
  title: 'Social Link',
  type: 'object',
  fields: [
    defineField({
      name: 'platform',
      title: 'Platform',
      type: 'string',
      options: {
        list: [
          { title: 'Facebook', value: 'facebook' },
          { title: 'Twitter', value: 'twitter' },
          { title: 'Instagram', value: 'instagram' },
          { title: 'LinkedIn', value: 'linkedin' },
          { title: 'YouTube', value: 'youtube' }
        ]
      }
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url'
    }),
    defineField({
      name: 'logo',
      title: 'App Logo',
      type: 'image',
      options: {
        hotspot: true,
      }
    })
  ]
})

// Define the linkItem type
export const linkItem = defineType({
  name: 'linkItem',
  title: 'Link Item',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Link Text',
      type: 'string'
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url'
    })
  ]
})

// Define the linkGroup type
export const linkGroup = defineType({
  name: 'linkGroup',
  title: 'Link Group',
  type: 'object',
  fields: [
    defineField({
      name: 'groupTitle',
      title: 'Group Title',
      type: 'string',
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{ type: 'linkItem' }]
    })
  ],
  preview: {
    select: {
      title: 'groupTitle'
    }
  }
})

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
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string'
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string'
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string'
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
      of: [{ type: 'linkGroup' }]
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