import { defineField, defineType } from "sanity";

export default defineType({
  name: "faq",
  title: "Faq",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
    }),
    defineField({
      name: "text",
      title: "Text",
      type: "text",
    }),
  ],
});