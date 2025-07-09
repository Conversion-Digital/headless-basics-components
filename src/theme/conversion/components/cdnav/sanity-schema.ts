import { defineField, defineType } from 'sanity'
import { EyeOpenIcon } from '@sanity/icons'

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

export const linkItem = defineType({
  name: 'linkItem',
  title: 'Link Item',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: Rule => Rule.required()
    })
  ]
}) 

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



