import { defineField, defineType } from "sanity"

export default defineType({
  name: "productDetails",
  title: "ProductDetails",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
  ],
})