import { defineField, defineType } from "sanity";

export default defineType({
  name: "hero",
  title: "Hero",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "selectableVariant",
      title: "Selectable Variant",
      type: "string",
    }),
    defineField({
      name: "button",
      title: "Button",
      type: "object",
      fields: [
        defineField({
          name: "label",
          title: "Label",
          type: "string",
        }),
        defineField({
          name: "link",
          title: "Link",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "object",
      fields: [
        defineField({
          name: "asset",
          title: "Asset",
          type: "object",
          fields: [
            defineField({
              name: "url",
              title: "URL",
              type: "string",
            }),
          ],
        }),
      ],
    }),
  ],
});