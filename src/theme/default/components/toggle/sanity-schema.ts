import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'toggle',
  title: 'Toggle',
  type: 'object',
  fields: [
    defineField({
      name: 'aRIALabel',
      title: 'ARIA Label',
      type: 'string',
      description: 'Accessible label for screen readers',
    }),
    defineField({
      name: 'className',
      title: 'Class Name',
      type: 'string',
      description: 'CSS class for styling',
    }),
    defineField({
      name: 'variant',
      title: 'Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Default', value: 'default' },
          { title: 'Primary', value: 'primary' },
          { title: 'Secondary', value: 'secondary' },
        ],
      },
    }),
    defineField({
      name: 'showIcon',
      title: 'Show Icon',
      type: 'boolean',
      description: 'Toggle whether an icon is displayed',
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
      description: 'Text label for the toggle',
    }),
  ],
});
