import { defineField, defineType } from "sanity"

export default defineType({
  name: "exploreTheRange",
  title: "ExploreTheRange",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
  ],
})