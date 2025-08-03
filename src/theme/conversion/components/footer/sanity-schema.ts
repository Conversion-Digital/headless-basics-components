import { defineField, defineType, defineArrayMember } from 'sanity'
import { EyeOpenIcon, BlockElementIcon, LinkIcon } from '@sanity/icons'
import { linkItem } from '@conversiondigital/headless-basics-data/src/cms/sanity/sanityCommonSchema'

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

// Define the link group type
export const linkGroup = defineType({
  name: 'footerLinkGroup',
  title: 'Footer Link Group',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Group Title',
      type: 'string'
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{ type: 'linkItem' }]
    })
  ]
})

// Define additionalInformation as a top-level type
export const additionalInformationType = defineType({
  name: 'additionalInformationType',
  title: 'Additional Information',
  type: 'object',
  fields: [
    defineField({
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string'
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string'
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string'
    })
  ]
})

export default defineType({
  name: 'footer',
  title: 'Footer (CD)',
  type: 'document',
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
      of: [{ type: 'footerLinkGroup' }]
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
      to: [{ type: 'footer' }],
      description: 'Select a global re-usable footer.'
    }),
    defineField({
      name: 'additionalInformation',
      title: 'Additional Information',
      type: 'additionalInformationType'
    })
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
})

// Override settings type for footer
export const footerOverrideSettings = defineType({
  name: 'footerOverrideSettings',
  title: 'Footer Override Settings',
  type: 'object',
  fields: [
    defineField({
      name: 'hideOnThisPage',
      title: 'Hide Footer on This Page',
      type: 'boolean'
    })
  ]
})

// Simplified reference component for use in pages
export const footerReference = defineType({
  name: 'footerReference',
  title: 'Footer',
  type: 'object',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'globalComponentSource',
      title: 'Select Footer',
      type: 'reference',
      to: [{ type: 'footer' }],
      description: 'Choose a global footer component.',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'overrideSettings',
      title: 'Override Settings',
      type: 'footerOverrideSettings',
      description: 'Optional: Override specific settings for this page only'
    })
  ],
  preview: {
    select: {
      title: 'globalComponentSource.title',
      hidden: 'overrideSettings.hideOnThisPage'
    },
    prepare({ title, hidden }) {
      return {
        title: title || 'Footer',
        subtitle: hidden ? 'Hidden' : 'Default settings'
      }
    }
  }
})


