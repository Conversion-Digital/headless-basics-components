import { defineField, defineType } from 'sanity'

export const clientItem = defineType({
  name: 'clientItem',
  title: 'Client Item',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Client Name',
      type: 'string'
    }),
    defineField({
      name: 'logo',
      title: 'Client Logo',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'link',
      title: 'Client Link',
      type: 'url'
    })
  ]
}) 