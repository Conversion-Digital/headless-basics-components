import { defineField, defineType } from "sanity"

export default defineType({
  name: "seo",
  title: "Seo",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
  ],
})