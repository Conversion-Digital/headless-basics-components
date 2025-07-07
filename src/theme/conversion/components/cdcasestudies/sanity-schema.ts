import { defineField, defineType, defineArrayMember } from 'sanity'
import { EyeOpenIcon } from '@sanity/icons'

// Define the case study item schema
export const caseStudyItem = defineType({
  name: 'caseStudyItem',
  title: 'Case Study Item',
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
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url'
    }),
    defineField({
      name: 'topics',
      title: 'Topics',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Topics/categories for this case study',
      options: {
        layout: 'tags'
      }
    })
  ]
})

export default defineType({
  name: 'cdcasestudies',
  title: 'Case Studies (CD)',
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
          { title: 'Our Work', value: 'ourWork' },
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
      description: 'Main heading for the case studies section.'
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Subtitle or tagline for the case studies section.'
    }),
    defineField({
      name: 'topics',
      title: 'Topics',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Topics used for filtering case studies',
      options: {
        layout: 'tags'
      }
    }),
    defineField({
      name: 'items',
      title: 'Case Studies',
      type: 'array',
      of: [{ type: 'caseStudyItem' }]
    }),
    defineField({
      name: 'globalComponentSource',
      title: 'Global Component Source',
      type: 'reference',
      to: [{ type: 'cdcasestudies' }],
      description: 'Select a global re-usable cdcasestudies component if desired.'
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
    }),
    defineField({
      name: 'showFilter',
      title: 'Show Keyword Filter',
      type: 'boolean',
      description: 'Show the keyword filter section above the case studies',
      initialValue: true
    }),
    defineField({
      name: 'filterTitle',
      title: 'Filter Title',
      type: 'string',
      description: 'Title for the keyword filter section',
      initialValue: 'Filter by Category'
    }),
    defineField({
      name: 'allKeyword',
      title: 'All Keywords Text',
      type: 'string',
      description: 'Text for the "show all" filter option',
      initialValue: 'All'
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle'
    }
  }
});