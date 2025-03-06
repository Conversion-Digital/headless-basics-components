import { defineField, defineType } from "sanity"

export default defineType({
  name: "featureThreeImagesSection",
  title: "FeatureThreeImagesSection",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
  ],
})