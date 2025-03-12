import { defineField, defineType } from 'sanity'
import heroButton from './schema/sanity-hero-button'
import {EyeOpenIcon} from '@sanity/icons'

export default defineType({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  icon: EyeOpenIcon,
  fields: [
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
    })
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
})