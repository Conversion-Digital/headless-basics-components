import { defineField, defineType } from "sanity"

export default defineType({
  name: "googleMaps",
  title: "GoogleMaps",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
  ],
})