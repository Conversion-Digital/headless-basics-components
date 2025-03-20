import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'callToActionTwoImageBtn',
  title: 'Call To Action Two Image Btn',
  type: 'object',
  fields: [
    defineField({
      name: 'selectableVariant',
      title: 'Selectable Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Default', value: 'default' },
          { title: 'calltoactiontwoimagebtndemo', value: 'calltoactiontwoimagebtndemo' }
        ]
      }
    }),
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
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number'
    }),
    defineField({
      name: 'imageLeft',
      title: 'Image Left',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'imageRight',
      title: 'Image Right',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'ctaLabelLeft',
      title: 'CTA Label Left',
      type: 'string'
    }),
    defineField({
      name: 'ctaLabelRight',
      title: 'CTA Label Right',
      type: 'string'
    }),
    defineField({
      name: 'globalComponentSource',
      title: 'Global Component Source',
      type: 'reference',
      to: [{ type: 'callToActionTwoImageBtn' }],
      description: 'Select an optional global reference to store re-usable content.'
    })
  ],
});