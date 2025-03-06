import { defineField, defineType } from "sanity"

export default defineType({
  name: "productDownloads",
  title: "ProductDownloads",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
  ],
})