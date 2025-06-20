import { defineField, defineType } from 'sanity'
import { EyeOpenIcon } from '@sanity/icons'

// Define the topic type at the top level
export const topicItem = defineType({
  name: 'topicItem',
  title: 'Topic Item',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Topic Name',
      type: 'string'
    }),
    defineField({
      name: 'url',
      title: 'Topic URL',
      type: 'string'
    })
  ]
});

export const insightItem = defineType({
  name: 'insightItem',
  title: 'Insight Item',
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
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      description: 'Text for the item button'
    }),
    defineField({
      name: 'buttonUrl',
      title: 'Button URL',
      type: 'string',
      description: 'URL for the item button'
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
      name: 'topics',
      title: 'Topics',
      type: 'array',
      of: [{ type: 'topicItem' }]  // Reference the top-level type
    })
  ]
});

export default defineType({
  name: 'cdinsights',
  title: 'Insights (CD)',
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
      name: 'heading',
      title: 'Heading',
      type: 'string'
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string'
    }),
    defineField({
      name: 'items',
      title: 'Insights',
      type: 'array',
      of: [{ type: 'insightItem' }]
    }),
    defineField({
      name: 'globalComponentSource',
      title: 'Global Component Source',
      type: 'reference',
      to: [{ type: 'cdinsights' }]
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
  ]
});