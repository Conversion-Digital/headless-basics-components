import { defineField, defineType } from 'sanity'

export const partnerItem = defineType({
  name: 'partnerItem',
  title: 'Partner Item',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Partner Name',
      type: 'string'
    }),
    defineField({
      name: 'logo',
      title: 'Partner Logo',
      type: 'image',
      options: {
        hotspot: true
      }
    })
  ]
}) 