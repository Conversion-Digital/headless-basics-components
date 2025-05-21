import { defineField, defineType } from 'sanity'
import { EyeOpenIcon } from '@sanity/icons'

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

export default defineType({
  name: 'cdtestimonials',
  title: 'Testimonials (CD)',
  type: 'object',
  icon: EyeOpenIcon,
  fields: [
    defineField({
      name: 'selectableVariant',
      title: 'Selectable Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Default', value: 'default' },
          { title: 'Demo', value: 'xDemo' },
        ],
      },
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
      description: 'Order of the component when displayed on a page.'
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Heading for testimonials section.'
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Subtitle or tagline for the testimonial area.'
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [{ type: 'singleTestimonial' }]
    }),
    defineField({
      name: 'globalComponentSource',
      title: 'Global Component Source',
      type: 'reference',
      to: [{ type: 'cdtestimonials' }],
      description: 'Select a global re-usable cdtestimonials component if desired.'
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle'
    }
  }
})