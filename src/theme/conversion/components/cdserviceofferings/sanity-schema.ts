import { defineField, defineType } from 'sanity'
import { EyeOpenIcon } from '@sanity/icons'

// Define a separate type for the offering object
export const cdserviceOfferingItem = defineType({
  name: 'cdserviceOfferingItem',
  title: 'Service Offering Item',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The name of the service offering'
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'The icon name to display for this offering'
    }),
    defineField({
      name: 'id',
      title: 'ID',
      type: 'slug',
      description: 'A unique identifier for this service offering',
    })
  ]
})

// Define a separate type for the service detail object
export const cdserviceDetailItem = defineType({
  name: 'cdserviceDetailItem',
  title: 'Service Detail Item',
  type: 'object',
  fields: [
    defineField({
      name: 'id',
      title: 'ID',
      type: 'string',
      description: 'A unique identifier for this service detail (should match an offering ID)'
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the service detail'
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'The rich text content for this service detail'
    })
  ]
})

export default defineType({
  name: 'cdserviceofferings',
  title: 'Service Offerings (CD)', 
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
        { type: 'cdserviceOfferingItem' }
      ],
    }),
    defineField({
      name: 'services',
      title: 'Service Details',
      type: 'array',
      of: [
        { type: 'cdserviceDetailItem' }
      ],
      description: 'The detailed content for each service offering'
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
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}) 