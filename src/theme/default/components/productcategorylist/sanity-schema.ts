import { defineField, defineType } from "sanity"

export default defineType({
  name: "productCategoryList",
  title: "ProductCategoryList",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
  ],
})