import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'chatBoxComponent',
  title: 'ChatBox',
  type: 'object',
  fields: [
    defineField({
      name: 'message',
      title: 'Message',
      type: 'string',
      description: 'The message to display inside the chatbox',
    }),
    defineField({
      name: 'width',
      title: 'Width',
      type: 'number',
      description: 'The width of the chatbox in pixels',
    }),
    defineField({
      name: 'height',
      title: 'Height',
      type: 'number',
      description: 'The height of the chatbox in pixels',
    }),
    defineField({
      name: 'animationDuration',
      title: 'Animation Duration',
      type: 'number',
      description: 'The duration of the animation in seconds',
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
      description: 'The variant of the chatbox (default or flip)',
    }),
    defineField({
      name: 'contentAlignment',
      title: 'Content Alignment',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Center', value: 'center' },
          { title: 'Right', value: 'right' },
        ],
      },
      description: 'The alignment of the content inside the chatbox',
    }),
  ],
});
