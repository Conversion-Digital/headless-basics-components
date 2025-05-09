import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'chatBox',
  title: 'Chat Box',
  type: 'object',
  fields: [
    defineField({
      name: 'message',
      title: 'Message',
      type: 'string',
      description: 'The message displayed in the chat box.',
    }),
    defineField({
      name: 'width',
      title: 'Width',
      type: 'number',
      description: 'Width of the chat box.',
    }),
    defineField({
      name: 'height',
      title: 'Height',
      type: 'number',
      description: 'Height of the chat box.',
    }),
    defineField({
      name: 'animationDuration',
      title: 'Animation Duration',
      type: 'number',
      description: 'Duration of the animation in seconds.',
    }),
    defineField({
      name: 'variant',
      title: 'Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Default', value: 'default' },
          { title: 'Flip', value: 'flip' },
        ],
      },
      description: 'Style variant of the chat box.',
    }),
    defineField({
      name: 'contentAlignment',
      title: 'Content Alignment',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Right', value: 'right' },
          { title: 'Center', value: 'center' },
        ],
      },
      description: 'Alignment of the content inside the chat box.',
    }),
  ],
});
