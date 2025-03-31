
import { defineField, defineType } from "sanity";

export default defineType({
  name: "frame469",
  title: "Frame469",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "selectableVariant",
      title: "Selectable Variant",
      type: "string",
      options: {
        list: [
          { title: "Default", value: "default" },
          { title: "Demo", value: "demo" },
        ],
      },
    }),
    defineField({
      name: "sortOrder",
      title: "Sort Order",
      type: "number",
    }),
    defineField({
      name: "globalComponentSource",
      title: "Global Component Source",
      type: "reference",
      to: [{ type: "frame469" }],
      description: "Select a frame469 component that is a global reusable source."
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
    },
  },
});
