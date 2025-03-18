import { defineField, defineType } from "sanity"

export default defineType({
  name: "sitemapClient",
  title: "SitemapClient",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
  ],
})