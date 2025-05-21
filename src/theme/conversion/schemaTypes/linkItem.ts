import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'linkItem',
  title: 'Link Item',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Link Text',
      type: 'string'
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url'
    })
  ]
}) 