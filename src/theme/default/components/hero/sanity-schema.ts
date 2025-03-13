import { defineField, defineType } from 'sanity'
import heroButton from './schema/sanity-hero-button'
import {EyeOpenIcon} from '@sanity/icons'


export const heroFields = [
  defineField({
    name: 'title',
    title: 'Title',
    type: 'string'
  }),
  defineField({
    name: 'subtitle',
    title: 'Subtitle',
    type: 'string'
  }),
  defineField({
    name: 'backgroundImage',
    title: 'Background Image',
    type: 'image',
    options: {
      hotspot: true
    }
  }),
  defineField({
    name: 'button',
    title: 'Button',
    type: 'heroButton'
  }),
  defineField({
    name: 'sortOrder',
    title: 'Sort Order',
    type: 'number'
  }),
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
    name: 'globalComponentSource',
    title: 'Global Component Source',
    type: 'reference',
    to: [{type: 'hero'}],
    description: 'Select a component hero that is a global reusable source.'
  })
]
export default defineType({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  icon: EyeOpenIcon,
  fields: heroFields,
  preview: {
    select: {
      title: 'title'
    }
  }
})

export const heroDocument = defineType({
  name: 'heroDocument',
  title: 'Hero Document',
  type: 'document',
  fields: heroFields,
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
    },
  },
})