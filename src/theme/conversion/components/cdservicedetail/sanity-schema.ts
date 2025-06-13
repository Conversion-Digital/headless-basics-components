import { defineField, defineType } from 'sanity'
import { DocumentTextIcon } from '@sanity/icons'

export default defineType({
  name: 'cdservicedetail',
  title: 'Service Detail (CD)', 
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
      name: 'services',
      title: 'Service Details',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Service Detail',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              description: 'The title of the service detail section'
            },
            {
              name: 'id',
              title: 'ID',
              type: 'slug',
              description: 'A unique identifier for this service detail (should match an offering ID)',
            },
            {
              name: 'content',
              title: 'Content',
              type: 'array',
              of: [
                {
                  type: 'block',
                  styles: [
                    {title: 'Normal', value: 'normal'},
                    {title: 'H3', value: 'h3'},
                    {title: 'H4', value: 'h4'},
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
                            type: 'url',
                            title: 'URL'
                          }
                        ]
                      }
                    ]
                  }
                }
              ],
              description: 'The rich text content for the service detail'
            }
          ]
        }
      ]
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
      to: [{ type: 'cdservicedetail' }],
      description: 'Select a global re-usable service detail component.'
    })
  ],
}) 