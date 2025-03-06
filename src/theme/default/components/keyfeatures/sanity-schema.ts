import { defineField, defineType } from "sanity"

export default defineType({
  name: "keyFeatures",
  title: "KeyFeatures",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
  ],
})