import { defineField, defineType } from 'sanity'
import { DocumentTextIcon } from '@sanity/icons'

// Define a separate document type for cdserviceintro
export default defineType({
  name: 'cdserviceintro',
  title: 'Service Introduction (CD)', 
  type: 'document',
  icon: DocumentTextIcon,
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
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'The main heading for the service introduction section'
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The secondary title for the service introduction section'
    }),
    defineField({
      name: 'content',
      title: 'Content',
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
      description: 'The rich text content for the service introduction'
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number'
    })
    // Temporarily removing the globalComponentSource field as it may be causing circular references
    // defineField({
    //   name: 'globalComponentSource',
    //   title: 'Global Component Source',
    //   type: 'reference',
    //   to: [{ type: 'cdserviceintro' }],
    //   description: 'Select a global re-usable service introduction.'
    // })
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'title'
    }
  }
}) 