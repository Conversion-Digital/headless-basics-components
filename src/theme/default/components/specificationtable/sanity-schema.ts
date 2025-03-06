import { defineField, defineType } from "sanity"

export default defineType({
  name: "specificationTable",
  title: "SpecificationTable",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
  ],
})