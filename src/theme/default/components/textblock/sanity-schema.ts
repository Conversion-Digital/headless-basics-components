import { defineField, defineType } from "sanity"

export default defineType({
  name: "textblock",
  title: "TextBlock",
  type: "document",
  fields: [
    defineField({
      name: "body",
      title: "Body",
      type: "text",
    }),
  ],
})