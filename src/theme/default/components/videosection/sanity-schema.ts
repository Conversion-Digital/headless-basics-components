import { defineField, defineType } from "sanity"

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
  ],
})