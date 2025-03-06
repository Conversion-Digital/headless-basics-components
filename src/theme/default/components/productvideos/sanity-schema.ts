import { defineField, defineType } from "sanity"

export default defineType({
  name: "productVideos",
  title: "ProductVideos",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
  ],
})