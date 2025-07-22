import { defineField, defineType, defineArrayMember } from 'sanity'
import { EyeOpenIcon } from '@sanity/icons'

// Define the case study item schema for hero banner as a top-level type
export const heroCaseStudyItem = defineType({
  name: 'heroCaseStudyItem',
  title: 'Hero Case Study Item',
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
    })
  ]
})

export default defineType({
  name: 'herobanner',
  title: 'HeroBanner',
  type: 'object',
  icon: EyeOpenIcon,
  fields: [
    defineField({
      name: 'selectableVariant',
      title: 'Selectable Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Title Only', value: 'title-only' },
          { title: 'Introduction', value: 'introduction' },
          { title: 'Default', value: 'default' },
          { title: 'Case Study', value: 'caseStudy' },
          { title: 'Demo', value: 'xDemo' },
        ]
      }
    }),
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
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Additional descriptive text for the hero banner (especially useful for Case Study variant)'
      name: 'category',
      title: 'Category',
      description: 'e.g: Services, About Us, etc.',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'altText',
      title: 'Alt Text',
      type: 'string',
    }),
    defineField({
      name: 'button',
      title: 'Button',
      type: 'heroButton'
    }),
    defineField({
      name: 'items',
      title: 'Case Studies',
      type: 'array',
      of: [{ type: 'heroCaseStudyItem' }],
      description: 'Case studies to display in the hero banner (for Case Study variant)'
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
      to: [{type: 'herobanner'}],
      description: 'Select a component that is a global reusable source.'
    })
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
})