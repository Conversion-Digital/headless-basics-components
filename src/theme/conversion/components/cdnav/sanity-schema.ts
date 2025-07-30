import { defineField, defineType } from 'sanity'

import { EyeOpenIcon, LinkIcon } from '@sanity/icons'
import { linkItem } from '@conversiondigital/headless-basics-data/src/cms/sanity/sanityCommonSchema'


// Define the dropdown menu type
export const dropdownMenu = defineType({
  name: 'cdnavDropdownMenu',
  title: 'Navigation Dropdown Menu',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Menu Label',
      type: 'string'
    }),
    defineField({
      name: 'dropdownLinks',
      title: 'Dropdown Links',
      type: 'array',
      of: [{ type: 'linkItem' }]
    })
  ]
})

// Using linkItem from sanityCommonSchema instead of redefining it

export default defineType({
  name: 'cdnav',
  title: 'Navigation (CD)', 
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
      title: 'Navigation Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle', 
      type: 'string',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'isTransparent',
      title: 'Is Transparent?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      initialValue: 'transparent'
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{ type: 'linkItem' }]
    }),
    defineField({
      name: 'dropdownMenus',
      title: 'Dropdown Menus',
      type: 'array',
      of: [{ type: 'cdnavDropdownMenu' }]
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
      to: [{ type: 'cdnav' }],
      description: 'Select a global re-usable cdnav.'
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      initialValue: 'Contact Us'
    }),
    defineField({
      name: 'buttonUrl',
      title: 'Button URL',
      type: 'url'
    })
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
})

// Override settings type for navigation
export const cdnavOverrideSettings = defineType({
  name: 'cdnavOverrideSettings',
  title: 'Navigation Override Settings',
  type: 'object',
  fields: [
    defineField({
      name: 'isTransparent',
      title: 'Make Transparent',
      type: 'boolean'
    }),
    defineField({
      name: 'hideOnThisPage',
      title: 'Hide Navigation on This Page',
      type: 'boolean'
    })
  ]
})

// Simplified reference component for use in pages
export const cdnavReference = defineType({
  name: 'cdnavReference',
  title: 'Navigation',
  type: 'object',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'globalComponentSource',
      title: 'Select Navigation',
      type: 'reference',
      to: [{ type: 'cdnav' }],
      description: 'Choose a global navigation component.',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'overrideSettings',
      title: 'Override Settings',
      type: 'cdnavOverrideSettings',
      description: 'Optional: Override specific settings for this page only'
    })
  ],
  preview: {
    select: {
      title: 'globalComponentSource.title',
      transparent: 'overrideSettings.isTransparent',
      hidden: 'overrideSettings.hideOnThisPage'
    },
    prepare({ title, transparent, hidden }) {
      const subtitle = []
      if (hidden) subtitle.push('Hidden')
      if (transparent) subtitle.push('Transparent')
      
      return {
        title: title || 'Navigation',
        subtitle: subtitle.length > 0 ? subtitle.join(', ') : 'Default settings'
      }
    }
  }
})