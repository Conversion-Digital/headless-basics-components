import { defineField, defineType } from "sanity"

export default defineType({
  name: "sitemap",
  title: "Sitemap",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
  ],
})