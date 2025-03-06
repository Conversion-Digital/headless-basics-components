import { defineField, defineType } from "sanity"

export default defineType({
  name: "breadcrumb",
  title: "Breadcrumb",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
    }),
  ],
})