import { defineField, defineType } from "sanity";

export const companyStats = defineType({
  name: "companyStats",
  title: "Company Stats",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
    }),
    defineField({
      name: "value",
      title: "Value",
      type: "string",
    }),
  ],
});

export default defineType({
  name: "ourcompany",
  title: "Our Company",
  type: "object",
  fields: [
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
      initialValue: "default",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Main heading text",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "Main body text for the Our Company section",
    }),
    defineField({
      name: "stats",
      title: "Stats",
      type: "array",
      of: [{ type: "companyStats" }],
      description: "List of stats about the company",
    }),
    defineField({
      name: "buttonLabel",
      title: "Button Label",
      type: "string",
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
      to: [{ type: "ourcompany" }],
      description: "Optionally reference a global Our Company document if needed",
    }),
  ],
});