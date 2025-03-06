import { defineField, defineType } from "sanity"

export default defineType({
  name: "toggle",
  title: "Toggle",
  type: "document",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
    }),
  ],
})