import { defineField, defineType } from "sanity"

export default defineType({
  name: "stickyNavigation",
  title: "StickyNavigation",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
  ],
})