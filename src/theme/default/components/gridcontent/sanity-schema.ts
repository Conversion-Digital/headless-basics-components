import { defineField, defineType } from "sanity"

export default defineType({
  name: "gridContent",
  title: "GridContent",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
  ],
})