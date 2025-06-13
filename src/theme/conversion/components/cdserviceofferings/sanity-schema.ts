import { defineField, defineType } from 'sanity'
import { TagIcon } from '@sanity/icons'

export default defineType({
  name: 'cdserviceofferings',
  title: 'Service Offerings (CD)', 
  type: 'document',
  icon: TagIcon,
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
      description: 'The main title for the service offerings section (e.g., "What We Offer")'
    }),
    defineField({
      name: 'intro',
      title: 'Introduction Text',
      type: 'text',
      description: 'A brief introduction to the service offerings'
    }),
    defineField({
      name: 'offerings',
      title: 'Service Offerings',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Offering',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              description: 'The name of the service offering'
            },
            {
              name: 'icon',
              title: 'Icon',
              type: 'string',
              description: 'The icon name to display for this offering'
            },
            {
              name: 'id',
              title: 'ID',
              type: 'slug',
              description: 'A unique identifier for this service offering',
            }
          ]
        }
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
      to: [{ type: 'cdserviceofferings' }],
      description: 'Select a global re-usable service offerings component.'
    })
  ]
}) 