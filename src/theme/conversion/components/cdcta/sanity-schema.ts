import { defineField, defineType } from "sanity";
import { EyeOpenIcon } from "@sanity/icons";

export default defineType({
  name: "cdcta",
  title: "CTA (CD)",
  type: "object",
  icon: EyeOpenIcon,
  fields: [
    defineField({
      name: "selectableVariant",
      title: "Selectable Variant",
      type: "string",
      options: {
        list: [
          { title: "Default", value: "default" },
          { title: "Demo", value: "xDemo" }
        ]
      }
    }),
    defineField({
      name: "sortOrder",
      title: "Sort Order",
      type: "number",
      description: "Order of the component when displayed on a page."
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Main heading for the CTA section."
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      description: "Subtitle or tagline for the CTA section."
    }),
    defineField({
      name: "buttonLabel",
      title: "Button Label",
      type: "string",
      description: "Label text for the CTA button"
    }),
    defineField({
      name: "buttonUrl",
      title: "Button URL",
      type: "url",
      description: "URL for the CTA button"
    }),
    defineField({
      name: "image",
      title: "Background/Image",
      type: "image",
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: "globalComponentSource",
      title: "Global Component Source",
      type: "reference",
      to: [{ type: "cdcta" }],
      description: "Select a global re-usable cdcta component if desired."
    })
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle"
    }
  }
});