import { defineField, defineType } from 'sanity'
import { EyeOpenIcon } from '@sanity/icons'

// Define a separate type for the FAQ item object
export const cdFaqItem = defineType({
  name: 'cdFaqItem',
  title: 'FAQ Item',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the FAQ item'
    }),
    defineField({
      name: 'richtext',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
            {title: 'Quote', value: 'blockquote'}
          ],
          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Numbered', value: 'number'}
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Underline', value: 'underline'}
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'string',
                    title: 'URL'
                  },
                  {
                    name: 'blank',
                    type: 'boolean',
                    title: 'Open in new tab',
                    initialValue: false
                  }
                ]
              }
            ]
          }
        }
      ],
      description: 'The rich text content for the FAQ item'
    })
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
})

export default defineType({
  name: 'cdfaqs',
  title: 'FAQs (CD)', 
  type: 'object',
  icon: EyeOpenIcon,
  fields: [
    defineField({
      name: 'selectableVariant',
      title: 'Selectable Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Default', value: 'default' }
        ]
      }
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The main title for the FAQs section (e.g., "Frequently Asked Questions")'
    }),
    defineField({
      name: 'description',
      title: 'Introduction Text',
      type: 'text',
      description: 'A brief description of the FAQs'
    }),
    defineField({
      name: 'items',
      title: 'FAQ Items',
      type: 'array',
      of: [
        { type: 'cdFaqItem' }
      ],
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
      to: [{ type: 'cdfaqs' }],
      description: 'Select a global re-usable FAQs component.'
    })
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}) 