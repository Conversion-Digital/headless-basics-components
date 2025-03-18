import { defineField, defineType } from "sanity"

export default defineType({
  name: "alias",
  title: "Alias",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
  ],
})