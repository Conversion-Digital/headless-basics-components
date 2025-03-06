import { defineField, defineType } from "sanity"

export default defineType({
  name: "richText",
  title: "RichText",
  type: "document",
  fields: [
    defineField({
      name: "body",
      title: "Body",
      type: "text",
    }),
  ],
})