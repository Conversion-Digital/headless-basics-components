import { defineField, defineType } from "sanity"

export default defineType({
  name: "phoneBlock",
  title: "PhoneBlock",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
  ],
})