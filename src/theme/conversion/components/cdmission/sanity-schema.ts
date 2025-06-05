import { defineField, defineType } from 'sanity'
import { EyeOpenIcon } from '@sanity/icons'

const keyPoint = defineType({
  name: 'missionKeyPoint',
  title: 'Key Point',
  type: 'object',
  fields: [
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text'
    })
  ]
})

const promise = defineType({
  name: 'missionPromise',
  title: 'Promise',
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
      name: 'icon',
      title: 'Icon',
      type: 'image',
      options: {
        hotspot: true
      }
    })
  ]
})

export default defineType({
  name: 'cdmission',
  title: 'Mission (CD)',
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
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
      description: 'Order of this component on the page'
    }),
    defineField({
      name: 'title',
      title: 'Mission Title',
      type: 'string',
      description: 'Main heading for the mission component.'
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Optional secondary heading for the mission.'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A short paragraph describing the mission.'
    }),
    defineField({
      name: 'image',
      title: 'Mission Image',
      type: 'image',
      description: 'Optional image that showcases your mission or brand identity.',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'globalComponentSource',
      title: 'Global Component Source',
      type: 'reference',
      to: [{ type: 'cdmission' }],
      description: 'Select a global re-usable cdmission component if desired.'
    }),
    defineField({
      name: 'keyPoints',
      title: 'Key Points',
      type: 'array',
      of: [{ type: 'missionKeyPoint' }],
      description: 'Add key points to highlight important aspects of your mission'
    }),
    defineField({
      name: 'promiseTitle',
      title: 'Promise Section Title',
      type: 'string',
      description: 'Main heading for the promises section'
    }),
    defineField({
      name: 'promiseSubtitle',
      title: 'Promise Section Subtitle',
      type: 'string',
      description: 'Optional subtitle for the promises section'
    }),
    defineField({
      name: 'promises',
      title: 'Promises',
      type: 'array',
      of: [{ type: 'missionPromise' }],
      description: 'Add promises that highlight your commitments'
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle'
    }
  }
});

export { keyPoint, promise }