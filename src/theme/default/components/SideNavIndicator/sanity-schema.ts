import { defineField, defineType } from "sanity";
import { EyeOpenIcon } from '@sanity/icons';

export default defineType({
  name: "xComponent",
  title: "X Component",
  type: "object",
  icon: EyeOpenIcon,
  fields: [
    defineField({
      name: "selectableVariant",
      title: "Selectable Variant",
      type: "string",
      options: {
        list: [
          { title: "Default", value: "default" },
          { title: "xDemo", value: "xDemo" }
        ]
      }
    }),
    defineField({
      name: "sortOrder",
      title: "Sort Order",
      type: "number"
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string"
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string"
    }),
    defineField({
      name: "navItems",
      title: "Navigation Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string"
            }),
            defineField({
              name: "active",
              title: "Active",
              type: "boolean"
            })
          ]
        }
      ]
    })
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "selectableVariant"
    }
  }
});