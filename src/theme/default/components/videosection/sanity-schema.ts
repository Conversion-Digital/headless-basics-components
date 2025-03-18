import { defineField, defineType } from "sanity";

export default defineType({
  name: "videoSection",
  title: "VideoSection",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "videoLink",
      title: "Video Link",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "url",
              title: "URL",
              type: "string",
            }),
          ],
        },
      ],
    }),
  ],
});