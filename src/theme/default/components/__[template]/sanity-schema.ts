import { defineField, defineType } from 'sanity'
import {EyeOpenIcon} from '@sanity/icons'


export const templateFields = [
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
    type: 'templateButton'
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
        { title: 'Template - Image Highlight', value: 'Template - Image Highlight' },
        { title: 'Demo', value: 'demo' },
      ]
    }
  }),
  defineField({
    name: 'globalComponentSource',
    title: 'Global Component Source',
    type: 'reference',
    to: [{type: 'template'}],
    description: 'Select a component template that is a global reusable source.'
  })
]
export default defineType({
  name: 'template',
  title: 'Template',
  type: 'object',
  icon: EyeOpenIcon,
  fields: templateFields,
  preview: {
    select: {
      title: 'title'
    }
  }
})

export const templateComponentGlobal = defineType({
  name: 'templateComponentGlobal',
  title: 'template Component - Global',
  type: 'document',
  fields: templateFields,
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
    },
  },
})