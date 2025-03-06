import { defineField, defineType } from "sanity"

export default defineType({
  name: "motto",
  title: "Motto",
  type: "document",
  fields: [
    defineField({
      name: "words",
      title: "Words",
      type: "string",
    }),
  ],
})