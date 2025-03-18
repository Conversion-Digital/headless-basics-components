import { defineField, defineType } from "sanity"

export default defineType({
  name: "advancedSpecificationTable",
  title: "AdvancedSpecificationTable",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    // Add more fields as needed
  ],
})