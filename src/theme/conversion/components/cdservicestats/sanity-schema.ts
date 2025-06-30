import { defineField, defineType } from 'sanity'
import { BarChartIcon } from '@sanity/icons'

// Define a separate type for the statistic object
export const cdserviceStatItem = defineType({
  name: 'cdserviceStatItem',
  title: 'Service Statistic Item',
  type: 'object',
  fields: [
    defineField({
      name: 'value',
      title: 'Value',
      type: 'string',
      description: 'The statistical value to display (e.g., "93%", "5.14")'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      description: 'The description of what the statistic represents'
    })
  ]
})

export default defineType({
  name: 'cdservicestats',
  title: 'Service Statistics (CD)', 
  type: 'object',
  icon: BarChartIcon,
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
      name: 'stats',
      title: 'Statistics',
      type: 'array',
      of: [
        { type: 'cdserviceStatItem' }
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
      to: [{ type: 'cdservicestats' }],
      description: 'Select a global re-usable service statistics component.'
    })
  ],
}) 