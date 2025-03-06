import { defineField, defineType } from "sanity"

export default defineType({
  name: "robotstxt",
  title: "Robotstxt",
  type: "document",
  fields: [
    defineField({
      name: "snippetCode",
      title: "Snippet Code",
      type: "text",
    }),
  ],
})