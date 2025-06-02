import { defineField, defineType } from 'sanity'
import { EyeOpenIcon } from '@sanity/icons'

export const singleTestimonial = defineType({
    name: 'singleTestimonial',
    title: 'Single Testimonial',
    type: 'object',
    fields: [
      defineField({
        name: 'name',
        title: 'Client Name',
        type: 'string'
      }),
      defineField({
        name: 'position',
        title: 'Position & Company',
        type: 'string',
        description: 'e.g. "CEO at Company Name" or "Marketing Director, Company Name"'
      }),
      defineField({
        name: 'testimonial',
        title: 'Testimonial',
        type: 'text'
      }),
      defineField({
        name: 'image',
        title: 'Client Image',
        type: 'image',
        options: {
          hotspot: true
        }
      })
    ]
  })

export const videoTestimonial = defineType({
  name: 'videoTestimonial',
  title: 'Video Testimonial',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Client Name',
      type: 'string'
    }),
    defineField({
      name: 'position',
      title: 'Position & Company',
      type: 'string',
      description: 'e.g. "CEO at Company Name" or "Marketing Director, Company Name"'
    }),
    defineField({
      name: 'testimonial',
      title: 'Testimonial Text',
      type: 'text'
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      description: 'Enter the URL of the video (YouTube, Vimeo, etc.)'
    }),
    defineField({
      name: 'thumbnail',
      title: 'Video Thumbnail',
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
      title: 'Written Testimonials',
      type: 'array',
      of: [{ type: 'singleTestimonial' }]
    }),
    defineField({
      name: 'videoTitle',
      title: 'Video Testimonials Title',
      type: 'string',
      description: 'Heading for video testimonials section.'
    }),
    defineField({
      name: 'videoSubtitle',
      title: 'Video Testimonials Subtitle',
      type: 'string',
      description: 'Subtitle for video testimonials section.'
    }),
    defineField({
      name: 'videoTestimonials',
      title: 'Video Testimonials',
      type: 'array',
      of: [{ type: 'videoTestimonial' }]
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
