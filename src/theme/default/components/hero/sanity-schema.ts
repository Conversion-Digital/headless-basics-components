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
    name: 'heading',
    title: 'Heading',
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
        { title: 'Default', value: 'Default' },
        { title: 'Hero - Image Highlight', value: 'Hero - Image Highlight' },
        { title: 'Hero - Hero CTA Buttons', value: 'Hero - Hero CTA Buttons' },
        { title: 'Hero - Right Image Hero', value: 'Hero - Right Image Hero' },
        { title: 'Hero - Faded Information Hero', value: 'Hero - Faded Information Hero' },
        { title: 'Hero - Title Only', value: 'Hero - Title Only' },
        { title: 'Hero - Slim Background', value: 'Hero - Slim Background' }
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

export const heroComponentGlobal = defineType({
  name: 'heroComponentGlobal',
  title: 'Hero Component - Global',
  type: 'document',
  fields: heroFields,
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
    },
  },
})