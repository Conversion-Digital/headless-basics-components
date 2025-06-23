import { defineField, defineType } from 'sanity'
import { BarChartIcon } from '@sanity/icons'

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
        {
          type: 'object',
          title: 'Statistic',
          fields: [
            {
              name: 'value',
              title: 'Value',
              type: 'string',
              description: 'The statistical value to display (e.g., "93%", "5.14")'
            },
            {
              name: 'description',
              title: 'Description',
              type: 'string',
              description: 'The description of what the statistic represents'
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
      to: [{ type: 'cdservicestats' }],
      description: 'Select a global re-usable service statistics component.'
    })
  ],
}) 