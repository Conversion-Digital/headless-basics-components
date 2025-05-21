import { defineField, defineType } from "sanity";

export const caseStudyItem = defineType({
    name: 'caseStudyItem',
    title: 'Case Study Item',
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
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true
        }
      }),
      defineField({
        name: 'link',
        title: 'Link',
        type: 'url'
      })
    ]
  })
  