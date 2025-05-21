import { defineField, defineType } from 'sanity'

export const singleTestimonial = defineType({
    name: 'singleTestimonial',
    title: 'Single Testimonial',
    type: 'object',
    fields: [
      defineField({
        name: 'name',
        title: 'Name',
        type: 'string'
      }),
      defineField({
        name: 'role',
        title: 'Role',
        type: 'string'
      }),
      defineField({
        name: 'company',
        title: 'Company',
        type: 'string'
      }),
      defineField({
        name: 'testimonial',
        title: 'Testimonial',
        type: 'text'
      }),
      defineField({
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true
        }
      })
    ]
  })