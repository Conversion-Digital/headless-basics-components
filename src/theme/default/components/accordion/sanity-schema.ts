import { defineField, defineType } from "sanity";

export default defineType({
  name: "accordion",
  title: "Accordion",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "items",
      title: "Accordion Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "heading",
              title: "Item Heading",
              type: "string",
            }),
            defineField({
              name: "content",
              title: "Item Content",
              type: "text",
            }),
          ],
        },
      ],
    }),
  ],
});