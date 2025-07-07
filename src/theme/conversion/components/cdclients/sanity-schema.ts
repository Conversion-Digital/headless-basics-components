import { defineField, defineType } from 'sanity';
import { EyeOpenIcon } from '@sanity/icons';

// Export the clientItem type
export const clientItem = defineType({
  name: 'clientItem',
  title: 'Client Item',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Client Name',
      type: 'string'
    }),
    defineField({
      name: 'link',
      title: 'Client Website URL',
      type: 'url'
    }),
    defineField({
      name: 'inactiveLogo',
      title: 'Inactive Logo',
      type: 'image',
      description: 'Logo shown by default (grayscale or muted version)'
    }),
    defineField({
      name: 'activeLogo',
      title: 'Active Logo',
      type: 'image',
      description: 'Logo shown on hover (colored or highlighted version)'
    })
  ]
});

export default defineType({
  name: 'cdclients',
  title: 'Clients (CD)',
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
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Main heading for the clients section.'
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Subtitle or tagline for the clients section.'
    }),
    defineField({
      name: 'clientsList',
      title: 'Clients List',
      type: 'array',
      of: [{ type: 'clientItem' }]
    }),
    defineField({
      name: 'globalComponentSource',
      title: 'Global Component Source',
      type: 'reference',
      to: [{ type: 'cdclients' }],
      description: 'Select a global re-usable cdclients component if desired.'
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      description: 'Text to display on the button'
    }),
    defineField({
      name: 'buttonUrl',
      title: 'Button URL',
      type: 'string',
      description: 'URL for the button link'
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle'
    }
  }
});