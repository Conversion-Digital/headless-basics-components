import { defineField, defineType } from "sanity"

export default defineType({
  name: "model",
  title: "Model",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
  ],
})