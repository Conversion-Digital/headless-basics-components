import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'siteHeader',
  title: 'Site Header',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image'
    }),
    defineField({
      name: 'navigation',
      title: 'Navigation',
      type: 'array',
      of: [{ type: 'targetedLink' }]
    })
  ]
}) 